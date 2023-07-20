import { Users } from "src/features/db/sql/dml/models/Users";
import type { User } from "src/features/db/sql/dml/types";
import { insertToError_logs } from "./insertToError_logs";
import { DataSource } from "src/features/db/sql/dml/models/DataSource";
import { GenericQuery } from "src/features/db/sql/dml/models/GenericQuery";

export async function loginOrRegisterUser(user: User) {
  const userName = user.name as string;
  const dataSource = new DataSource();
  const genericQuery = new GenericQuery(dataSource);

  try {
    await genericQuery.performQuery(async () => {
      const users = new Users(dataSource);

      const existUser = await users.exist(userName);

      if (existUser) return;
      await users.insert(user);
    });
  } catch (err: any) {
    insertToError_logs(err, dataSource);
  }
}
