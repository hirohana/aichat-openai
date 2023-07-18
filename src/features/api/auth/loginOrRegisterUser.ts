import { Users } from "src/features/db/sql/dml/models/Users";
import type { User } from "src/features/db/sql/dml/types";
import { insertToError_logs } from "./insertToError_logs";

export async function loginOrRegisterUser(user: User) {
  const userName = user.name as string;
  const users = new Users();

  try {
    const existUser = await users.exist(userName);
    if (existUser) return;
    await users.insert(user);
  } catch (err: any) {
    insertToError_logs(err);
  }
}
