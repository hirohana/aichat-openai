import { verifyApiKey } from "./verifyApiKey";
import { fetchTokensFromOpenAI } from "./fetchTokensFromOpenAI";

export async function verifyApiKeyAndFetchTokens(userMessage: string) {
  // const {
  //   apiKey,
  //   message: verifyMessage,
  //   status: verifyStatus,
  // } = verifyApiKey();
  // const hasApiKey = verifyStatus === STATUS_CODE_200;
  // if (!hasApiKey) {
  //   return {
  //     message: verifyMessage,
  //     status: verifyStatus,
  //   };
  // }

  // const apiKey = verifyApiKey();
  // const {
  //   tokens,
  //   message: errMessage,
  //   status,
  // } = await fetchTokensFromOpenAI(userMessage, apiKey);

  // return { tokens, errMessage, status };
  const apiKey = verifyApiKey();
  const tokens = await fetchTokensFromOpenAI(userMessage, apiKey);

  return tokens;
}
