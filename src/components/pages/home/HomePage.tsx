import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "src/features/auth/api/authOptions";
import ChatView from "src/components/elements/chatView/ChatView";

export async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/auth");
  }

  return (
    <div>
      <ChatView userIcon={user.image!} />
    </div>
  );
}
