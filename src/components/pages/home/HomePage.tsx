import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "src/features/auth/api/authOptions";
import ChatView from "src/components/elements/chatView/ChatView";
import { Header } from "src/components/layouts/header/Header";
import { Footer } from "src/components/layouts/footer/Footer";

export async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/auth");
  }

  return (
    <div className="h-screen mx-4">
      <Header />
      <main className="flex flex-col justify-center items-center h-5/6 ">
        <ChatView userIcon={user.image!} />
      </main>
      <Footer />
    </div>
  );
}
