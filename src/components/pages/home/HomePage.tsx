import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "src/features/auth/api/authOptions";

export async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/auth");
  }
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        <li>name: {user ? user.name : "ゲストユーザー"}</li>
        <li>email: {user ? user.email : ""}</li>
      </ul>
    </div>
  );
}
