import { useState } from "react";

export const useSideEffects = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [reply, setReply] = useState<string>("");
  const [assistantIcon, setAssistantIcon] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // NOTE cloud functionsのAPIを叩いて、OpenAIのAPIのストリームを取得する関数
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO バリデーションチェック。現状足りないので増やす必要がある。
    validateMessage(message);

    try {
      changeStateBeforeSendMessage(
        setIsLoading,
        setMessage,
        setMessages,
        message
      );

      const tokens = await getTokensFromOpenaiAPI(
        message,
        setIsLoading,
        setReply
      );

      changeStateAfterSendMessage(setReply, setIsLoading, setMessages, tokens);
    } catch (err: any) {
      window.location.reload();
      alert(
        "エラーが発生しました。時間をおいて再度リクエストを送信してください。"
      );
    }
  };

  return {
    message,
    setMessage,
    messages,
    isLoading,
    reply,
    assistantIcon,
    handleSubmit,
  };
};

function validateMessage(message: string) {
  if (!message) {
    return;
  }
}

function changeStateBeforeSendMessage(
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setMessages: React.Dispatch<
    React.SetStateAction<
      {
        sender: string;
        text: string;
      }[]
    >
  >,
  message: string
) {
  setIsLoading(true);
  setMessages((prevMessages) => [
    ...prevMessages,
    { sender: "user", text: message },
  ]);
  setMessage("");
}

async function getTokensFromOpenaiAPI(
  message: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setReply: React.Dispatch<React.SetStateAction<string>>
) {
  const generator = streamChatCompletion(message);

  let tokens = "";
  for await (let token of generator) {
    tokens += token;
    setReply(tokens);
  }

  return tokens;
}

async function* streamChatCompletion(message: string) {
  const completion = await fetch(
    `${process.env.REACT_APP_CLOUD_FUNCTION_API_URL}?message=${message}`
  );

  const reader = completion.body?.getReader();
  if (completion.status !== 200 || !reader) {
    throw new Error("Request failed");
  }
  const decoder = new TextDecoder("utf-8");
  let done = false;
  while (!done) {
    const { done: readDone, value } = await reader.read();
    if (readDone) {
      done = readDone;
      reader.releaseLock();
    } else {
      const token = decoder.decode(value, { stream: true });
      yield token;
    }
  }
}

function changeStateAfterSendMessage(
  setReply: React.Dispatch<React.SetStateAction<string>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setMessages: React.Dispatch<
    React.SetStateAction<
      {
        sender: string;
        text: string;
      }[]
    >
  >,
  tokens: string
) {
  setReply("");
  setIsLoading(false);
  setMessages((prevMessages) => [
    ...prevMessages,
    {
      sender: "assistant",
      text: tokens,
    },
  ]);
}
