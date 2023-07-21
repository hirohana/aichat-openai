import { DataSource } from "src/features/db/sql/dml/models/DataSource";
import { GenericTransaction } from "src/features/db/sql/dml/models/GenericTransaction";
import { Messages } from "src/features/db/sql/dml/models/Messages";
import { Responses } from "src/features/db/sql/dml/models/Responses";
import { Themes } from "src/features/db/sql/dml/models/Themes";
import { createUuid } from "src/hooks/createUuid";

type Args = {
  userMessage: string;
  AIResponse: string;
  userId: number;
  dataSource: DataSource;
};

export async function insertChatLogToDB({
  userMessage,
  AIResponse,
  userId,
  dataSource,
}: Args) {
  const genericTransaction = new GenericTransaction(dataSource);

  await genericTransaction.performTransaction(async () => {
    const themesTable = new Themes(dataSource);
    const themeId = createUuid();
    const trimMessage = userMessage.trim().slice(0, 10);

    await themesTable.insert({
      id: themeId,
      title: trimMessage,
      user_id: userId,
    });

    const messagesTable = new Messages(dataSource);
    await messagesTable.insert({
      theme_id: themeId,
      content: userMessage.trim(),
    });

    const responsesTable = new Responses(dataSource);
    await responsesTable.insert({
      theme_id: themeId,
      content: AIResponse.trim(),
    });
  });
}
