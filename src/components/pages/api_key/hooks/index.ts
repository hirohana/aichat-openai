import { Dispatch, SetStateAction } from "react";
import { RE_LOGIN_AND_RE_QUEST_MESSAGE } from "src/const";

type Args = {
  key: string;
  setKey: Dispatch<SetStateAction<string>>;
};

export async function registerApiKey({ key, setKey }: Args) {
  try {
    const response = await fetch("/api/api_key/register", {
      method: "POST",
      body: JSON.stringify(key),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { message } = await response.json();
    window.alert(message);
  } catch (err) {
    window.alert(RE_LOGIN_AND_RE_QUEST_MESSAGE);
  }

  setKey("");
}

export async function deleteApiKey() {
  try {
    const response = await fetch("/api/api_key/delete");
    const { message } = await response.json();
    window.alert(message);
  } catch (err) {
    window.alert(RE_LOGIN_AND_RE_QUEST_MESSAGE);
  }
}
