import { NextResponse } from "next/server";
import {
  DELETE_API_KEY,
  SERVER_ERROR_STATUS_CODE_500,
  STATUS_CODE_200,
  STATUS_CODE_500,
} from "src/const";
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
  } catch (err) {
    return NextResponse.json(
      { message: `${SERVER_ERROR_STATUS_CODE_500}: ${err}` },
      { status: STATUS_CODE_500 }
    );
  }
}
