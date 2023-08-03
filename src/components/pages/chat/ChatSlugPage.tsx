"use client";

import { useEffect } from "react";

import ChatView from "src/components/elements/chatView/ChatView";
import { useCheckLocalAuthAndRedirect } from "src/hooks/useCheckLocalAuthAndRedirect";

export function ChatSlugPage({ params }: { params: { slug: string } }) {
  const user = useCheckLocalAuthAndRedirect();
  const slug = params.slug;

  useEffect(() => {
    const fetchChatSlug = async () => {
      const response = await fetch(`http://localhost:3000/api/chat/${slug}`, {
        cache: "no-cache",
      });
      const themeSlug = await response.json();
      console.log(themeSlug);
    };

    fetchChatSlug();
  }, [slug]);

  return (
    <div className="flex flex-col justify-between h-screen mx-4">
      <main className="flex flex-col justify-center items-center">
        {user?.image && <ChatView userIcon={user.image} />}
      </main>
    </div>
  );
}
