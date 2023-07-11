import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { OpenAIApi, Configuration } from "openai";

export async function POST(request: Request) {
  const session = getServerSession();
  if (!session)
    NextResponse.json(
      { error: "ログインを行ってから送信してください。" },
      { status: 403 }
    );

  const message: string = await request.json();
  const API_KEY = process.env.OPEN_AI_API_KEY;
  const openAi = new OpenAIApi(new Configuration({ apiKey: API_KEY }));

  try {
    const response = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });
    return NextResponse.json(response.data.choices[0].message);
  } catch (err) {
    return NextResponse.json(
      { error: "エラーが発生しました。時間を置いて再度お試しください。" },
      { status: 500 }
    );
  }
}
