import { Dispatch, RefObject, SetStateAction } from "react";
import { RE_LOGIN_AND_RE_QUEST_MESSAGE } from "src/const";

type Args = {
  key: string | undefined;
};

export async function registerApiKey({ key }: Args) {
  if (!key) return;
  try {
    const response = await fetch("/api/api_key", {
      method: "POST",
      body: JSON.stringify(key),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { message } = await response.json();
    window.alert(message);
  } catch (err) {
    window.alert(`RE_LOGIN_AND_RE_QUEST_MESSAGE`);
  }

  window.location.reload();
}

export async function deleteApiKey() {
  try {
    const response = await fetch("/api/api_key", { method: "DELETE" });
    const { message } = await response.json();
    window.alert(message);
  } catch (err) {
    window.alert(RE_LOGIN_AND_RE_QUEST_MESSAGE);
  }
}
