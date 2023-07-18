import { NextResponse } from "next/server";
import { deleteApiKeyFromCookie } from "src/features/api/api_key/delete";

export async function GET() {
  const { message, status } = await deleteApiKeyFromCookie();

  return NextResponse.json({ message: message }, { status: status });
}
