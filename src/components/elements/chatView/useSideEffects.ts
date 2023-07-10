import { useState } from "react";

export const useSideEffects = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [reply, setReply] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendMessageToApi = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateMessage(message);

    try {
      createPayload(setIsLoading, setMessage, setMessages, message);

      const response = await sendPayloadAndGetTokens(message, setReply);

      processResponse(setReply, setIsLoading, setMessages, response);
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
    sendMessageToApi,
  };
};

// TODO バリデーションチェック。現状足りないので増やす必要がある。
function validateMessage(message: string) {
  if (!message) {
    return;
  }
}

function createPayload(
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

async function sendPayloadAndGetTokens(
  message: string,
  setReply: React.Dispatch<React.SetStateAction<string>>
) {
  debugger;
  const generator = streamChatCompletion(message);

  let tokens = "";
  for await (let token of generator) {
    tokens += token;
    setReply(tokens);
  }

  return tokens;
}

async function* streamChatCompletion(message: string) {
  const completion = await fetch("/api/openai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });

  debugger;
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

function processResponse(
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
