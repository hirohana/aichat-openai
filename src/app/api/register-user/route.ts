import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { NextResponse } from "next/server";
import { CALLBACK_URL, GOOGLE, HOME } from "src/const";

import { authOptions } from "src/features/auth/libs/authOptions";

export async function GET() {
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get(CALLBACK_URL) || HOME;
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
  return NextResponse.json("Hello, World", { status: 200 });
}
