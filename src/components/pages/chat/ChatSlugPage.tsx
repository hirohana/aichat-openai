"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useCheckLocalAuthAndRedirect } from "src/hooks/useCheckLocalAuthAndRedirect";
import {
  resetThemeId,
  setThemeIdToReduxStore,
  useHooks,
} from "src/components/elements/chatView/hooks";

import type { Props } from "src/app/chat/[slug]/page";
import { SERVER_ERROR_STATUS_CODE_500 } from "src/const";
import ChatView from "src/components/elements/chatView/ChatView";

export function ChatSlugPage({ params: { slug } }: Props) {
  const dispatch = useDispatch();
  const user = useCheckLocalAuthAndRedirect();
  const {
    message,
    messages,
    isLoading,
    reply,
    setMessage,
    setMessages,
    fetchTokenFromOpenAI,
  } = useHooks();

  useEffect(() => {
    const fetchChatSlug = async () => {
      const response = await fetch(`/api/chat/${slug}`, {
        cache: "no-cache",
      });
      const themeSlug: {
        sender: string;
        text: string;
      }[] = await response.json();

      setMessages(themeSlug);
      setThemeIdToReduxStore(dispatch, slug);
    };

    try {
      fetchChatSlug();
    } catch (err) {
      window.alert(`${SERVER_ERROR_STATUS_CODE_500}: ${err}`);
    }

    return () => {
      resetThemeId(dispatch);
    };
  }, [slug, setMessages, dispatch]);

  return (
    <main className="flex flex-col items-center">
      <ChatView
        user={user}
        message={message}
        messages={messages}
        reply={reply}
        isLoading={isLoading}
        setMessage={setMessage}
        fetchTokenFromOpenAI={fetchTokenFromOpenAI}
      />
    </main>
  );
}
