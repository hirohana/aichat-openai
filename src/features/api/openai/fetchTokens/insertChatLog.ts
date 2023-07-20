import { DataSource } from "src/features/db/sql/dml/models/DataSource";
import { Messages } from "src/features/db/sql/dml/models/Messages";
import { Responses } from "src/features/db/sql/dml/models/Responses";
import { Themes } from "src/features/db/sql/dml/models/Themes";
import { TransactionManager } from "src/features/db/sql/dml/models/TransactionManager";
import { createUuid } from "src/hooks/createUuid";

export async function insertChatLogToDB(
  userMessage: string,
  AIResponse: string
) {
  const dataSource = DataSource.getInstance();
  let transaction = new TransactionManager(dataSource);

  try {
    await transaction.beginTransaction();

    const themesTable = new Themes(dataSource);
    const id = createUuid();
    const trimMessage = userMessage.trim().slice(0, 10);
    await themesTable.insert({ id, title: trimMessage, user_id: 1 });

    const messagesTable = new Messages(dataSource);
    const responsesTable = new Responses(dataSource);
    // const result = Promise.all([
    //   messagesTable.insert({}),
    //   responsesTable.insert(dataSource),
    // ]);

    transaction.commit();
  } catch (err) {
    transaction.rollback();
    throw err;
  } finally {
    dataSource.closeConnection();
  }
}
