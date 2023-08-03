import { NextResponse } from "next/server";
import { RE_LOGIN_AND_RE_QUEST_MESSAGE, STATUS_CODE_500 } from "src/const";
import { ErrorName, errorList } from "src/const/errorList";
import { ChatLogs } from "src/features/db/sql/dml/models/ChatLogs";
import { DataSource } from "src/features/db/sql/dml/models/DataSource";
import { checkServerAuth } from "src/hooks/checkServerAuth";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { isLogin } = await checkServerAuth();
    if (!isLogin) return;

    const { slug } = params;
    const dataSource = new DataSource();
    const chatLogsTable = new ChatLogs(dataSource);

    const chatLogs = await chatLogsTable.selectByThemeId(slug);

    return NextResponse.json(chatLogs);
  } catch (err: any) {
    const errMessage = err.message as ErrorName;

    if (errorList[errMessage]) {
      return NextResponse.json(
        {
          message: errorList[errMessage].message,
        },
        { status: errorList[errMessage].status }
      );
    }

    return NextResponse.json(
      {
        message: `${RE_LOGIN_AND_RE_QUEST_MESSAGE}: ${err}`,
      },
      { status: STATUS_CODE_500 }
    );
  }
}
