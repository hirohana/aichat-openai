import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

import { API_KEY } from "src/const";

export function verifyApiKey() {
  const cookie = cookies().get(API_KEY) ?? { value: "" };
  const jsonwebtoken = cookie.value;
  const secretKey = process.env.SECRET_KEY as string;

  const payload: any = jwt.verify(jsonwebtoken, secretKey);
  const apiKey = payload.data;
  return apiKey;
}
