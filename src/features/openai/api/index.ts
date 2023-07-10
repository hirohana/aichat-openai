import { NextResponse } from "next/server";
import { OpenAIApi, Configuration } from "openai";

export async function sendMessageToOpenAI(message: string) {
  const API_KEY = process.env.OPEN_AI_API_KEY;
  const openAi = new OpenAIApi(new Configuration({ apiKey: API_KEY }));
  try {
    const response = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });
    return NextResponse.json(response.data.choices[0]);
  } catch (err) {
    return NextResponse.json(
      // { error: "エラーが発生しました。時間を置いて再度お試しください。" },
      { error: err },
      { status: 500 }
    );
  }
}
