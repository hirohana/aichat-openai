import { NextResponse } from "next/server";
import { RE_LOGIN_AND_RE_QUEST_MESSAGE, STATUS_CODE_500 } from "src/const";
import { ErrorName, errorList } from "src/const/errorList";
import { DataSource } from "src/features/db/sql/dml/models/DataSource";
import { Themes } from "src/features/db/sql/dml/models/Themes";
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
    const themesTable = new Themes(dataSource);

    const result = await themesTable.selectById(slug);

    return NextResponse.json("レスポンスが届いた。");
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
