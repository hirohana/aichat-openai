import { LOGIN_AND_RE_REQUEST_MESSAGE, STATUS_CODE_401 } from "src/const";
import { fetchTokens } from "./fetchTokens";
import { useAuthCheckServer } from "src/hooks/useAuthCheckServer";

export async function fetchTokensIfAuthenticated(userMessage: string) {
  // const isLogin = await useAuthCheckServer();
  if (!isLogin) {
    return {
      message: LOGIN_AND_RE_REQUEST_MESSAGE,
      status: STATUS_CODE_401,
    };
  }

  return await fetchTokens(userMessage);
}
