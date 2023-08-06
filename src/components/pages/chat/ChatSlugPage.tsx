"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { ChatConversation } from "src/components/elements/chatView/chatConversation/ChatConversation";
import { ChatForm } from "src/components/elements/chatView/chatForm/ChatForm";
import { useCheckLocalAuthAndRedirect } from "src/hooks/useCheckLocalAuthAndRedirect";
import {
  resetThemeId,
  setThemeIdToReduxStore,
  useHooks,
} from "src/components/elements/chatView/hooks";

import type { Props } from "src/app/chat/[slug]/page";
import { SERVER_ERROR_STATUS_CODE_500 } from "src/const";

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
      {user?.image && (
        <div className="flex flex-col justify-center w-full h-full max-w-4xl">
          <ChatForm
            handleSubmit={fetchTokenFromOpenAI}
            textAreaProps={{
              message,
              setMessage,
              onKeyDown: fetchTokenFromOpenAI,
            }}
          />
          <ChatConversation
            messages={messages}
            userIcon={user.image}
            assistantIcon="/icon/ai_icon.png"
            reply={reply}
            isLoading={isLoading}
          />
        </div>
      )}
    </main>
  );
}
