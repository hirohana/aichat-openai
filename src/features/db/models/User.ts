import mysql from "mysql2/promise";

import { DATABASE_URL } from "src/config/mysql.config";

type UserProps = {
  nickname: string;
  email: string;
  password: string;
};

class User {
  constructor() {}

  public async insert(user: UserProps) {
    // userオブジェクトのヴァリデーションチェック
    // if (!validateCheck(user)) return false;

    if (!DATABASE_URL) return false;

    const { nickname, email, password } = user;

    let connection: mysql.Connection;
    let statement: mysql.PreparedStatementInfo;
    try {
      connection = await mysql.createConnection(DATABASE_URL);
      const query =
        "INSERT INTO `users` (`nickname`, `email`, `password`) VALUES (?, ?, ?);";
      statement = await connection.prepare(query);
      await statement.execute([nickname, email, password]);
    } catch (err) {
      console.log(`error: ${err}`);
    }
  }
}

export default User;
