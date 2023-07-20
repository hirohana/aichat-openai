import { NextResponse } from "next/server";
import { SERVER_ERROR_STATUS_CODE_500, STATUS_CODE_500 } from "src/const";
import { fetchTokensIfAuthenticated } from "src/features/api/openai/fetchTokens";
import { insertChatLogToDB } from "src/features/api/openai/fetchTokens/insertChatLog";
import { checkServerAuth } from "src/hooks/checkServerAuth";

export async function POST(request: Request) {
  try {
    const { isLogin } = await checkServerAuth();
    if (!isLogin) return;

    const userMessage: string = await request.json();
    const {
      tokens,
      message: errMessage,
      status,
    } = await fetchTokensIfAuthenticated(userMessage);

    // TODO userMessageをtxn_messagesテーブルに、tokensのAIレスポンスをtxn_responsesテーブルにそれぞれ挿入。
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
