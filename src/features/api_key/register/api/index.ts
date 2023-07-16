import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import { API_KEY, HOME, REGISTER_API_KEY } from "src/const";

export async function registerApiKeyToCookie(request: Request) {
  const payload = { data: await request.json(), expiresIn: "1h" };
  const secretKey = process.env.SECRET_KEY as string;
  const token = jwt.sign(payload, secretKey, {
    algorithm: "HS256",
  });

  cookies().set({
    name: API_KEY,
    value: token,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: HOME,
  });

  return {
    message: REGISTER_API_KEY,
    status: 200,
  };
}
