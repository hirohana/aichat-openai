import { NextResponse } from "next/server";
import { fetchTokensIfAuthenticated } from "src/features/api/openai/fetchTokens";

export async function POST(request: Request) {
  const userMessage: string = await request.json();
  const {
    tokens,
    message: errMessage,
    status,
  } = await fetchTokensIfAuthenticated(userMessage);

  // TODO userMessageをtxn_messagesテーブルに、tokensのAIレスポンスをtxn_responsesテーブルにそれぞれ挿入。

  return NextResponse.json({ tokens, message: errMessage }, { status });
}
