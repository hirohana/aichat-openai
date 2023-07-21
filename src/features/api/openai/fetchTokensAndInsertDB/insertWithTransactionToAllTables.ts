import { DataSource } from "src/features/db/sql/dml/models/DataSource";
import { GenericTransaction } from "src/features/db/sql/dml/models/GenericTransaction";
import { insertMessagesAndResponses } from "./insertMessagesAndResponses";
import { insertThemes } from "./insertThemes";
import { selectUsers } from "./selectUsers";

export type Args = {
  userMessage: string;
  AIResponse: string;
  username: string;
  themeId: string;
};

export async function insertWithTransactionToAllTables({
  userMessage,
  AIResponse,
  username,
  themeId,
}: Args) {
  const dataSource = new DataSource();
  const genericTransaction = new GenericTransaction(dataSource);

  await genericTransaction.performTransaction(async () => {
    const userId = await selectUsers({ dataSource, username });

    await insertThemes({ dataSource, themeId, userId, userMessage });

    await insertMessagesAndResponses({
      dataSource,
      themeId,
      userMessage,
      AIResponse,
    });
  });
}
