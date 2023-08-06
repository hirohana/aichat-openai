import { ChatLogs } from "src/features/db/sql/dml/models/ChatLogs";
import { DataSource } from "src/features/db/sql/dml/models/DataSource";
import { GenericTransaction } from "src/features/db/sql/dml/models/GenericTransaction";
import { Themes } from "src/features/db/sql/dml/models/Themes";

export async function deleteThemesAndChatLogs(slug: string) {
  const dataSource = new DataSource();
  const genericTransaction = new GenericTransaction(dataSource);

  await genericTransaction.performTransaction(async () => {
    const themesTable = new Themes(dataSource);
    await themesTable.delete(slug);

    const chatLogsTable = new ChatLogs(dataSource);
    return await chatLogsTable.deleteByThemeId(slug);
  });
}
