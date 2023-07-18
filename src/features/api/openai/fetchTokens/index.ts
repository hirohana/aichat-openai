import { getServerSession } from "next-auth";

import { LOGIN_AND_RE_REQUEST_MESSAGE, STATUS_CODE_401 } from "src/const";
import { fetchTokens } from "./fetchTokens";

export async function fetchTokensIfAuthenticated(userMessage: string) {
  const isLogin = await authUser();
  if (!isLogin) {
    return {
      message: LOGIN_AND_RE_REQUEST_MESSAGE,
      status: STATUS_CODE_401,
    };
  }

  return await fetchTokens(userMessage);
}

async function authUser(): Promise<boolean> {
  const session = await getServerSession();

  if (!session) return false;
  return true;
}
