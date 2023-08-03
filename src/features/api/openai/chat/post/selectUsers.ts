import { DataSource } from "src/features/db/sql/dml/models/DataSource";
import { Users } from "src/features/db/sql/dml/models/Users";

type Args = {
  dataSource: DataSource;
  username: string;
};

export async function selectUsers({ dataSource, username }: Args) {
  const usersTable = new Users(dataSource);
  const { id: userId }: { id: number } = await usersTable.select(username);
  return userId;
}
