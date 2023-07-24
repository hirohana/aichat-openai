"use client";

import ChatView from "src/components/elements/chatView/ChatView";
import { useCheckLocalAuthAndRedirect } from "src/hooks/useCheckLocalAuthAndRedirect";

export async function HomePage() {
  const user = useCheckLocalAuthAndRedirect();

  return (
    <div className="flex flex-col justify-between h-screen mx-4">
      <main className="flex flex-col justify-center items-center">
        {user?.image && <ChatView userIcon={user.image} />}
      </main>
    </div>
  );
}
