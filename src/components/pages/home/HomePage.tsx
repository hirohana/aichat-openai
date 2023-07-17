import { redirect } from "next/navigation";

import ChatView from "src/components/elements/chatView/ChatView";
import { Header } from "src/components/layouts/header/Header";
import { Footer } from "src/components/layouts/footer/Footer";
import { hasLoggedInUser } from "src/hooks";

export async function HomePage() {
  const user = await hasLoggedInUser();

  if (!user) {
    redirect("/auth");
  }

  return (
    <div className="flex flex-col justify-between h-screen  mx-4">
      <Header />
      <main className="flex flex-col justify-center items-center">
        <ChatView userIcon={user.image!} />
      </main>
      <Footer />
    </div>
  );
}
