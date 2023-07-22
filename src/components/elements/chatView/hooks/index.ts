import { useState } from "react";
import { RE_LOGIN_AND_RE_QUEST_MESSAGE, USER } from "src/const";

type ResponseFromOpenAI = {
  tokens: { role: string; content: string };
  message: string;
  status: number;
};

export const useHooks = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [reply, setReply] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchTokenFromOpenAI = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateMessage(message);

    try {
      const payload = createPayload(
        setIsLoading,
        setMessage,
        setMessages,
        message
      );
      debugger;
      const response = await fetch("/api/openai/fetchTokens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const { tokens, message: errMessage }: ResponseFromOpenAI =
        await response.json();

      if (errMessage) {
        window.alert(errMessage);
        window.location.reload();
        return;
      }

      processResponse(setReply, setIsLoading, setMessages, tokens);
    } catch (err: any) {
      window.location.reload();
      alert(RE_LOGIN_AND_RE_QUEST_MESSAGE);
    }
  };

  return {
    message,
    setMessage,
    messages,
    isLoading,
    reply,
    fetchTokenFromOpenAI,
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
    { sender: USER, text: message },
  ]);
  setMessage("");
  // TODO ReduxからclientThemeIdを取得する関数を定義して値を取得できた場合は代入。
  // 値を取得できなかった場合は初回リクエストとしてclientThemeIdにnullを代入して送信。
  return { userMessage: message, clientThemeId: null };
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
  tokens: { role: string; content: string }
) {
  setReply("");
  setIsLoading(false);
  setMessages((prevMessages) => [
    ...prevMessages,
    {
      sender: tokens.role,
      text: tokens.content,
    },
  ]);
}
