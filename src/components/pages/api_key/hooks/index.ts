export async function registerApiKey(key: string) {
  try {
    const response = await fetch("/api/api_key/register", {
      method: "POST",
      body: JSON.stringify(key),
      headers: {
        "Content-Type": "application/json",
      },
    });
    debugger;
    const { message } = await response.json();
    window.alert(message);
  } catch (err) {
    window.alert("エラーが発生しました。少し時間を置いて再度お試しください。");
  }
}

export async function deleteApiKey() {
  try {
    const response = await fetch("/api/api_key/delete");
    const { message } = await response.json();
    window.alert(message);
  } catch (err) {
    window.alert(
      "エラーが発生しました。少し時間を置いて再度お試しください。" + err
    );
  }
}
