import { Users } from "src/features/db/sql/dml/models/Users";
import type { User } from "src/features/db/sql/dml/types";
import { insertToError_logs } from "./insertToError_logs";
import { DataSource } from "src/features/db/sql/dml/models/DataSource";

export async function loginOrRegisterUser(user: User) {
  const userName = user.name as string;
  let dataSource: DataSource | null = null;

  try {
    dataSource = DataSource.getInstance();
    const users = new Users(dataSource);

    const existUser = await users.exist(userName);

    if (existUser) return;
    await users.insert(user);
  } catch (err: any) {
    if (dataSource) {
      insertToError_logs(err, dataSource);
    }
  }
}
