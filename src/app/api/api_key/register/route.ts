import { NextResponse } from "next/server";
import { SERVER_ERROR_STATUS_CODE_500, STATUS_CODE_500 } from "src/const";
import { registerApiKeyToCookie } from "src/features/api/api_key/register/index";
import { checkServerAuth } from "src/hooks/checkServerAuth";

export async function POST(request: Request) {
  try {
    const { isLogin } = await checkServerAuth();
    if (!isLogin) return;

    const { message, status } = await registerApiKeyToCookie(request);

    return NextResponse.json({ message: message }, { status: status });
  } catch (err) {
    return NextResponse.json(
      { message: `${SERVER_ERROR_STATUS_CODE_500}: ${err}` },
      { status: STATUS_CODE_500 }
    );
  }
}
