import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST() {
  const token = cookies().get("api_key");
  const secretKey = process.env.PRIVATE_KEY as string;
  // const key = jwt.verify(token, secretKey)
}
