import { getServerSession } from "next-auth";

export async function checkServerAuth() {
  const session = await getServerSession();

  if (!session) return { isLogin: false, user: null };
  return { isLogin: true, user: session.user };
}
