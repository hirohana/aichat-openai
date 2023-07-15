import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function registerApiKeyToCookie(request: Request) {
  const payload = { data: await request.json(), expiresIn: "1h" };
  const privateKey = process.env.PRIVATE_KEY as string;
  const token = jwt.sign(payload, privateKey, {
    algorithm: "HS256",
  });

  cookies().set({
    name: "api_key",
    value: token,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });

  return {
    message: "Apiキーが保存されました。",
    status: 200,
  };
}
