import { NextResponse } from "next/server";
import {
  DELETE_API_KEY,
  RE_LOGIN_AND_RE_QUEST_MESSAGE,
  STATUS_CODE_200,
  STATUS_CODE_500,
} from "src/const";
import { ErrorName, errorList } from "src/const/errorList";
import { deleteApiKeyFromCookie } from "src/features/api/api_key/delete";
import { checkServerAuth } from "src/hooks/checkServerAuth";

export async function GET() {
  try {
    const { isLogin } = await checkServerAuth();
    if (!isLogin) return;

    await deleteApiKeyFromCookie();

    return NextResponse.json(
      { message: DELETE_API_KEY },
      { status: STATUS_CODE_200 }
    );
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
