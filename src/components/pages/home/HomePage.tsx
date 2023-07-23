"use client";

import ChatView from "src/components/elements/chatView/ChatView";
import { Header } from "src/components/layouts/header/Header";
import { Footer } from "src/components/layouts/footer/Footer";
import { useCheckLocalAuthAndRedirect } from "src/hooks/useCheckLocalAuthAndRedirect";

export async function HomePage() {
  const user = useCheckLocalAuthAndRedirect();

  return (
    <div className="flex flex-col justify-between h-screen mx-4">
      <Header />
      <main className="flex flex-col justify-center items-center">
        {user?.image && <ChatView userIcon={user.image} />}
      </main>
      <Footer />
    </div>
  );
}
