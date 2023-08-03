import { DataSource } from "src/features/db/sql/dml/models/DataSource";
import { Themes } from "src/features/db/sql/dml/models/Themes";
import { Users } from "src/features/db/sql/dml/models/Users";

export async function selectThemeList(userName: string) {
  const dataSource = new DataSource();
  const users = new Users(dataSource);
  const { id } = (await users.select(userName)) || { id: "" };

  const themes = new Themes(dataSource);
  return await themes.selectByUserId(id);
}
