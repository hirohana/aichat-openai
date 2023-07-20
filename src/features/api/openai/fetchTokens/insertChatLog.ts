import { DataSource } from "src/features/db/sql/dml/models/DataSource";
import { Messages } from "src/features/db/sql/dml/models/Messages";
import { Responses } from "src/features/db/sql/dml/models/Responses";
import { Themes } from "src/features/db/sql/dml/models/Themes";
import { createUuid } from "src/hooks/createUuid";

export async function insertChatLogToDB(
  userMessage: string,
  AIResponse: string,
  userId: number
) {
  // const dataSource = DataSource.getInstance();
  // let transaction = new TransactionManager(dataSource);

  try {
    await transaction.beginTransaction();

    const themesTable = new Themes(dataSource);
    const theme_id = createUuid();
    const trimMessage = userMessage.trim().slice(0, 10);
    await themesTable.insert({
      id: theme_id,
      title: trimMessage,
      user_id: userId,
    });

    const messagesTable = new Messages(dataSource);
    const responsesTable = new Responses(dataSource);
    await Promise.all([
      messagesTable.insert({
        theme_id,
        content: userMessage.trim(),
      }),
      responsesTable.insert({ theme_id, content: AIResponse.trim() }),
    ]);

    transaction.commit();
  } catch (err) {
    transaction.rollback();
    throw err;
  } finally {
    dataSource.closeConnection();
  }
}
