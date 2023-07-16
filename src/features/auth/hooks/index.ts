import { Error_logs } from "src/features/db/sql/dml/models/Error_logs";
import { Users } from "src/features/db/sql/dml/models/Users";
import type { User } from "src/features/db/sql/dml/types";

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

// TODO user_idとrequest_urlを取得するコードを記述する。
export async function insertToError_logs(err: any) {
  const errorObj = {
    error_message: err.code ?? null,
    error_code: err.errno ?? null,
    user_id: null,
    request_url: null,
    stack_trace: err.stack ?? null,
    sql_state: err.sqlState ?? null,
  };

  try {
    const errorLogs = new Error_logs();
    await errorLogs.insert(errorObj);
  } catch (error) {
    console.error(error);
  }
}
