// TODO アプリケーション全体で使う共通ロジックを置く。主に便利ロジック

import { Dispatch, SetStateAction } from "react";

type Options = {
  secure: boolean;
  expires: string;
};

export function setApiKeyCookie(
  value: string,
  secure: boolean,
  expires: number,
  setValue: Dispatch<SetStateAction<string>>
): void {
  const exp = createExpires(expires);
  const options: Options = {
    secure,
    expires: exp,
  };
  if (!value) return;
  document.cookie = "apikey=" + value + ";" + getCookieOptionsString(options);
  setValue("");
  window.alert("Apiキーが保存されました。");
}

function createExpires(expires: number): string {
  let exp = new Date();
  exp.setDate(exp.getDate() + expires);
  return exp.toUTCString();
}

function getCookieOptionsString(options: Options): string {
  let cookieOptions = "";

  for (const optionKey in options) {
    if (options.hasOwnProperty(optionKey)) {
      cookieOptions +=
        optionKey + "=" + options[optionKey as keyof Options] + ";";
    }
  }

  return cookieOptions;
}

export function deleteApiKeyCookie(): void {
  const options: Options = {
    secure: true,
    expires: createExpires(-1),
  };

  document.cookie = "apikey=; " + getCookieOptionsString(options);
  window.alert("Apiキーが削除されました。");
}
