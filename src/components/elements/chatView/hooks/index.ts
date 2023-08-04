import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  RE_LOGIN_AND_RE_QUEST_MESSAGE,
  STATUS_CODE_400,
  USER,
} from "src/const";
import { setThemeId } from "src/stores/themeId/reducer";
import { ThemeId } from "src/types";

type DataFromOpenAI = {
  tokens: { role: string; content: string };
  themeId: string;
  message: string;
};

type Payload = {
  message: string;
  themeId: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setMessages: React.Dispatch<
    React.SetStateAction<
      {
        sender: string;
        text: string;
      }[]
    >
  >;
};

type ProcessingResponse = {
  tokens: { role: string; content: string };
  setReply: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setMessages: React.Dispatch<
    React.SetStateAction<
      {
        sender: string;
        text: string;
      }[]
    >
  >;
};

export const useHooks = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [reply, setReply] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const themeId = useSelector<ThemeId, string>((state) => state.themeId.value);

  const fetchTokenFromOpenAI = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidate = validateMessage(message);
    if (!isValidate) return;

    try {
      const payload = createPayload({
        message,
        themeId,
        setMessage,
        setMessages,
        setIsLoading,
      });

      const response = await fetch("/api/openai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const {
        tokens,
        themeId: serverThemeId,
        message: errMessage,
      }: DataFromOpenAI = await response.json();

      if (response.status >= STATUS_CODE_400) {
        window.alert(errMessage);
        window.location.reload();
        return;
      }

      setThemeIdToReduxStore(dispatch, serverThemeId);

      processResponse({
        setReply,
        setIsLoading,
        setMessages,
        tokens,
      });
    } catch (err: any) {
      alert(`${RE_LOGIN_AND_RE_QUEST_MESSAGE}: ${err}`);
      window.location.reload();
    }
  };

  return {
    message,
    setMessage,
    setMessages,
    messages,
    isLoading,
    reply,
    fetchTokenFromOpenAI,
  };
};

// TODO バリデーションチェック。現状足りないので増やす必要がある。
function validateMessage(message: string): boolean {
  if (!message) {
    return false;
  }
  return true;
}

function createPayload({
  message,
  themeId,
  setIsLoading,
  setMessage,
  setMessages,
}: Payload) {
  setIsLoading(true);
  setMessages((prevMessages) => [
    ...prevMessages,
    { sender: USER, text: message },
  ]);
  setMessage("");

  // TODO ReduxからclientThemeIdを取得する関数を定義して値を取得できた場合は代入。
  // 値を取得できなかった場合は初回リクエストとしてthemeIdをリクエストに含めて送信。
  return { userMessage: message, themeId };
}

function setThemeIdToReduxStore(
  dispatch: Dispatch<AnyAction>,
  serverThemeId: string
) {
  dispatch(setThemeId(serverThemeId));
}

function processResponse({
  tokens,
  setReply,
  setIsLoading,
  setMessages,
}: ProcessingResponse) {
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
