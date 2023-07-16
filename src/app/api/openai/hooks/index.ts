import { getServerSession } from "next-auth";

import {
  LOGIN_AND_RE_REQUEST_MESSAGE,
  STATUS_CODE_200,
  STATUS_CODE_401,
} from "src/const";
import { verifyApiKey } from "src/features/api_key/verify/api";
import { getTokenFromOpenAI } from "src/features/openai/api";

export async function getTokensFromOpenAi(request: Request) {
  const isLogin = await authUser();
  if (!isLogin) {
    return {
      message: LOGIN_AND_RE_REQUEST_MESSAGE,
      status: STATUS_CODE_401,
    };
  }

  const {
    apiKey,
    message: verifyMessage,
    status: verifyStatus,
  } = verifyApiKey();
  const hasApiKey = verifyStatus === STATUS_CODE_200;
  if (!hasApiKey) {
    return {
      message: verifyMessage,
      status: verifyStatus,
    };
  }

  const userMessage: string = await request.json();
  const { tokens, message, status } = await getTokenFromOpenAI(
    userMessage,
    apiKey
  );
  return { tokens, message, status };
}

async function authUser(): Promise<boolean> {
  const session = await getServerSession();

  if (!session) return false;
  return true;
}
