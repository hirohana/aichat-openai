"use client";

import { useEffect } from "react";

import { ChatConversation } from "src/components/elements/chatView/chatConversation/ChatConversation";
import { ChatForm } from "src/components/elements/chatView/chatForm/ChatForm";
import { useCheckLocalAuthAndRedirect } from "src/hooks/useCheckLocalAuthAndRedirect";
import { useHooks } from "src/components/elements/chatView/hooks";

import type { Props } from "src/app/chat/[slug]/page";

export function ChatSlugPage({ params: { slug } }: Props) {
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
      const response = await fetch(`http://localhost:3000/api/chat/${slug}`, {
        cache: "no-cache",
      });
      const themeSlug: {
        sender: string;
        text: string;
      }[] = await response.json();

      setMessages(themeSlug);
    };

    fetchChatSlug();
  }, [slug, setMessages]);

  return (
    <div className="flex flex-col justify-between h-screen mx-4">
      <main className="flex flex-col justify-center items-center">
        {user?.image && (
          <div className="flex flex-col justify-between w-full h-full max-w-4xl">
            <ChatConversation
              messages={messages}
              userIcon={user.image}
              assistantIcon="/icon/ai_icon.png"
              reply={reply}
              isLoading={isLoading}
            />
            <ChatForm
              handleSubmit={fetchTokenFromOpenAI}
              textAreaProps={{ message, setMessage }}
            />
          </div>
        )}
      </main>
    </div>
  );
}
