import { cookies } from "next/headers";

export async function deleteApiKeyFromCookie() {
  cookies().set({
    name: "api_key",
    value: "",
    expires: new Date("2016-10-05"),
    path: "/",
  });

  return {
    message: "Apiキーが削除されました。",
    status: 200,
  };
}
