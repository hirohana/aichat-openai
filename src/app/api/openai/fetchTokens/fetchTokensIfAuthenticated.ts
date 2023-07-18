import { getServerSession } from "next-auth";

import { LOGIN_AND_RE_REQUEST_MESSAGE, STATUS_CODE_401 } from "src/const";
import { fetchTokens } from "src/features/api/openai/fetchTokens";

export async function fetchTokensIfAuthenticated(request: Request) {
  const isLogin = await authUser();
  if (!isLogin) {
    return {
      message: LOGIN_AND_RE_REQUEST_MESSAGE,
      status: STATUS_CODE_401,
    };
  }

  return await fetchTokens(request);
}

async function authUser(): Promise<boolean> {
  const session = await getServerSession();

  if (!session) return false;
  return true;
}
