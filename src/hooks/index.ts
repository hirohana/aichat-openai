// INFO アプリケーション全体で使う共通ロジックを置く。主に便利ロジック

import { getServerSession } from "next-auth";

import { authOptions } from "src/features/auth/api/authOptions";
import { SessionUser } from "src/types";

export async function hasLoggedInUser(): Promise<SessionUser> {
  const session = await getServerSession(authOptions);
  return session?.user;
}
