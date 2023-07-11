import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { sendMessageToOpenAi } from "src/features/openai/api";

export async function POST(request: Request) {
  const session = getServerSession();

  // TODO エラーが発生した際のクライアント側へのデータ送信の方法と
  // クライアント側でどういう風にエラーメッセージを表示させるか。
  if (!session)
    NextResponse.json(
      { error: "ログインを行ってから送信してください。" },
      { status: 403 }
    );

  const message: string = await request.json();
  const response = await sendMessageToOpenAi(message);
  return NextResponse.json(response);
}
