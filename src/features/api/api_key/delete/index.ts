import { cookies } from "next/headers";
import { API_KEY, DELETE_API_KEY, HOME, STATUS_CODE_200 } from "src/const";

export async function deleteApiKeyFromCookie() {
  cookies().set({
    name: API_KEY,
    value: "",
    expires: new Date("2016-10-05"),
    path: HOME,
  });
}
