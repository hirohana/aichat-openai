import mysql from "mysql2/promise";
import { getServerSession } from "next-auth";

import { authOptions } from "src/features/auth/libs/authOptions";

type UserProps = {
  nickname: string;
  email: string;
  password: string;
};

async function insert() {
  // // DATABASE_URLチェック
  // if (!process.env.DATABASE_URL) return false;

  //  セッションからユーザー情報を取得。
  const session = await getServerSession(authOptions);
  const user = session?.user;
  // const { nickname, email, password } = user;

  // // userデータのヴァリデーションチェック
  // // if (!validateCheck(user)) return false;

  // // ユーザーテーブルにuserデータをinsert。例外処理もここで記述。
  // let connection: mysql.Connection;
  // let statement: mysql.PreparedStatementInfo;
  // try {
  //   connection = await mysql.createConnection(process.env.DATABASE_URL);
  //   const query =
  //     "INSERT INTO `users` (`nickname`, `email`, `password`) VALUES (?, ?, ?);";
  //   statement = await connection.prepare(query);
  //   await statement.execute([nickname, email, password]);
  // } catch (err) {
  //   console.log(`error: ${err}`);
  // }

  // // ホームページにリダイレクト。
}

export { insert };
