import { NextResponse } from "next/server";
import {
  RE_LOGIN_AND_RE_QUEST_MESSAGE,
  STATUS_CODE_200,
  STATUS_CODE_500,
} from "src/const";
import { checkServerAuth } from "src/hooks/checkServerAuth";
import { fetchTokensAndInsertDB } from "src/features/api/openai/chat/post";
import { errorList, ErrorName } from "src/const/errorList";
import { selectThemeList } from "src/features/api/openai/chat/get";

export async function GET() {
  try {
    const { isLogin, user } = await checkServerAuth();
    // INFO ユーザーがログインしていない場合に、ただreturnだけ記述するとフロント側でエラーが発生するので空配列を返す。
    if (!isLogin) return NextResponse.json([]);

    const userName = user?.name as string;
    const themeList = await selectThemeList(userName);

    return NextResponse.json(themeList);
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

export async function POST(request: Request) {
  try {
    const { isLogin, user } = await checkServerAuth();
    if (!isLogin) return;

    const { tokens, themeId } = await fetchTokensAndInsertDB({
      request,
      user,
    });

    return NextResponse.json({ tokens, themeId }, { status: STATUS_CODE_200 });
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
