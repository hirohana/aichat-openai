import { NextResponse } from "next/server";
import { fetchTokensIfAuthenticated } from "./fetchTokensIfAuthenticated";

export async function POST(request: Request) {
  const { tokens, message, status } = await fetchTokensIfAuthenticated(request);

  return NextResponse.json({ tokens, message }, { status });
}
