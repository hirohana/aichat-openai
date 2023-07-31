import { DataSource } from "src/features/db/sql/dml/models/DataSource";
import { Themes } from "src/features/db/sql/dml/models/Themes";

type Args = {
  dataSource: DataSource;
  themeId: string;
  userMessage: string;
  userId: number;
};

export async function insertThemes({
  dataSource,
  themeId,
  userMessage,
  userId,
}: Args) {
  const themesTable = new Themes(dataSource);
  const trimMessage = userMessage.trim().slice(0, 10);

  await themesTable.insert({
    id: themeId,
    theme: trimMessage,
    user_id: userId,
  });
}
