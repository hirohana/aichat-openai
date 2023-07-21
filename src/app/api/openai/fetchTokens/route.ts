import { NextResponse } from "next/server";
import { STATUS_CODE_200, STATUS_CODE_500 } from "src/const";
import { checkServerAuth } from "src/hooks/checkServerAuth";
import { fetchTokensAndInsertDB } from "src/features/api/openai/fetchTokensAndInsertDB";

export async function POST(request: Request) {
  try {
    const { isLogin, user } = await checkServerAuth();
    if (!isLogin) return;

    const { tokens, themeId } = await fetchTokensAndInsertDB({
      request,
      user,
    });

    return NextResponse.json({ tokens, themeId }, { status: STATUS_CODE_200 });
  } catch (err) {
    return NextResponse.json(
      {
        message: `${err}`,
      },
      { status: STATUS_CODE_500 }
    );
  }
}
