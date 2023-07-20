import { NextResponse } from "next/server";
import { SERVER_ERROR_STATUS_CODE_500, STATUS_CODE_500 } from "src/const";
import { fetchTokens } from "src/features/api/openai/fetchTokens/index";
import { insertChatLogToDB } from "src/features/api/openai/fetchTokens/insertChatLog";
import { DataSource } from "src/features/db/sql/dml/models/DataSource";
import { Users } from "src/features/db/sql/dml/models/Users";
import { checkServerAuth } from "src/hooks/checkServerAuth";

export async function POST(request: Request) {
  try {
    const { isLogin, user } = await checkServerAuth();
    if (!isLogin) return;

    const userMessage: string = await request.json();
    const {
      tokens,
      message: errMessage,
      status,
    } = await fetchTokens(userMessage);

    const dataSource = DataSource.getInstance();
    const usersTable = new Users(dataSource);
    const { id } = await usersTable.select(user?.name as string);

    const AIMessage = tokens?.content as string;

    await insertChatLogToDB(userMessage, AIMessage);

    return NextResponse.json({ tokens, message: errMessage }, { status });
  } catch (err) {
    return NextResponse.json(
      {
        message: `${SERVER_ERROR_STATUS_CODE_500}: ${err}`,
      },
      { status: STATUS_CODE_500 }
    );
  }
}
