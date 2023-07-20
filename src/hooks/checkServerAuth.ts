import { getServerSession } from "next-auth";

export async function authUserCheckServer(): Promise<any> {
  const session = await getServerSession();

  if (!session) return { isLogin: false, user: null };
  return { isLogin: true, user: session.user };
}
