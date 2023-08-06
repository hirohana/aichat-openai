"use client";

import { ChatConversation } from "src/components/elements/chatView/chatConversation/ChatConversation";
import { ChatForm } from "src/components/elements/chatView/chatForm/ChatForm";
import { useHooks } from "src/components/elements/chatView/hooks";
import { useCheckLocalAuthAndRedirect } from "src/hooks/useCheckLocalAuthAndRedirect";

export async function HomePage() {
  const user = useCheckLocalAuthAndRedirect();
  const {
    message,
    setMessage,
    messages,
    isLoading,
    reply,
    fetchTokenFromOpenAI,
  } = useHooks();

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
