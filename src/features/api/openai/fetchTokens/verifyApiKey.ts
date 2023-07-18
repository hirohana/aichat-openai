import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

import {
  API_KEY,
  EXPIRED_API_KEY_AND_NOT_REGISTER_API_KEY,
  STATUS_CODE_200,
  STATUS_CODE_403,
} from "src/const";

export function verifyApiKey() {
  const cookie = cookies().get(API_KEY) ?? { value: "" };
  const jsonwebtoken = cookie.value;
  const secretKey = process.env.SECRET_KEY as string;

  try {
    const payload: any = jwt.verify(jsonwebtoken, secretKey);
    const apiKey = payload.data;
    return { apiKey, status: STATUS_CODE_200 };
  } catch (err) {
    return {
      message: EXPIRED_API_KEY_AND_NOT_REGISTER_API_KEY,
      status: STATUS_CODE_403,
    };
  }
}
