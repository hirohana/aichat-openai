import { createUuid } from "src/hooks/createUuid";
import { verifyApiKeyAndFetchTokens } from "./verifyApiKeyAndFetchTokens";
import { insertWithTransactionToAllTables } from "./insertWithTransactionToAllTables";
import { insertWithTransactionToMessagesAndResponses } from "./insertWithTransactionToMessagesAndResponses";

type Args = {
  request: Request;
  user:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | null
    | undefined;
};

export async function fetchTokensAndInsertDB({ request, user }: Args) {
  const {
    userMessage,
    clientThemeId,
  }: { userMessage: string; clientThemeId: string | null } =
    await request.json();

  const {
    tokens,
    message: errMessage,
    status,
  } = await verifyApiKeyAndFetchTokens(userMessage);

  // INFO フロント側からthemeIDを取得できなかった場合は初回リクエストになるので、themeIDを作成して処理。
  // フロント側からthemeIDを取得できた場合は初回リクエストではないので、渡ってきたthemeIDをそのまま渡して処理を行う。
  const AIResponse = tokens?.content as string;
  const username = user?.name as string;
  let themeId = clientThemeId;
  if (!themeId) {
    themeId = createUuid();
    insertWithTransactionToAllTables({
      userMessage,
      AIResponse,
      username,
      themeId,
    });
  } else {
    insertWithTransactionToMessagesAndResponses({
      userMessage,
      AIResponse,
      themeId,
    });
  }

  return { tokens, errMessage, themeId: null };
}
