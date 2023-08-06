"use client";

import ChatView from "src/components/elements/chatView/ChatView";
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
