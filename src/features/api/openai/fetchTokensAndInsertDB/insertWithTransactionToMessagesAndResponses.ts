import { GenericTransaction } from "src/features/db/sql/dml/models/GenericTransaction";
import { insertMessagesAndResponses } from "./insertMessagesAndResponses";
import { DataSource } from "src/features/db/sql/dml/models/DataSource";

type Args = {
  userMessage: string;
  AIResponse: string;
  themeId: string;
};

export async function insertWithTransactionToMessagesAndResponses({
  userMessage,
  AIResponse,
  themeId,
}: Args) {
  const dataSource = new DataSource();
  const genericTransaction = new GenericTransaction(dataSource);

  await genericTransaction.performTransaction(async () => {
    await insertMessagesAndResponses({
      dataSource,
      themeId,
      userMessage,
      AIResponse,
    });
  });
}
