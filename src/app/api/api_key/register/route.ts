import { NextResponse } from "next/server";
import { registerApiKeyToCookie } from "src/features/api_key/register/api";

export async function POST(request: Request) {
  const { message, status } = await registerApiKeyToCookie(request);

  return NextResponse.json({ message: message }, { status: status });
}
