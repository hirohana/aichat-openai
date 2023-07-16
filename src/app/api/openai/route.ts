import { NextResponse } from "next/server";

import { getTokensFromOpenAi } from "./hooks/index";

export async function POST(request: Request) {
  const { tokens, message, status } = await getTokensFromOpenAi(request);

  return NextResponse.json({ tokens, message }, { status });
}
