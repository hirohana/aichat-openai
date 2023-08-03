import { verifyApiKey } from "./verifyApiKey";
import { fetchTokensFromOpenAI } from "./fetchTokensFromOpenAI";

export async function verifyApiKeyAndFetchTokens(userMessage: string) {
  const apiKey = verifyApiKey();
  const tokens = await fetchTokensFromOpenAI(userMessage, apiKey);

  return tokens;
}
