"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import { SecondaryButton } from "src/components/elements/button/secondaryButton/SecondaryButton";
import { TertiaryButton } from "src/components/elements/button/tertiaryButton/TertiaryButton";
import { HeadingDescription } from "src/components/elements/heading/HeadingDescription";
import { HeadingText } from "src/components/elements/heading/HeadingText";
import { TextArea } from "src/components/elements/input/TextArea";
import { Footer } from "src/components/layouts/footer/Footer";
import { Header } from "src/components/layouts/header/Header";
import { registerApiKey, deleteApiKey } from "./hooks";

export function ApiKeyPage() {
  const [value, setValue] = useState("");
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    redirect("/auth");
  }

  return (
    <div className="h-screen mx-4">
      <Header />
      <main className="flex flex-col justify-center items-center h-5/6 ">
        <HeadingText text="Apiキー登録" />
        <HeadingDescription
          description={`Apiキーをお持ちの方は、下記の入力欄にて登録をお願いいたします。キーは1時間後に削除されます。`}
        />

        <TextArea
          value={value}
          setValue={setValue}
          placeholder="Please Input ApiKey"
        />
        <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between sm:flex sm:w-96 ">
          <SecondaryButton name="登録" onClick={() => registerApiKey(value)} />
          <TertiaryButton name="削除" onClick={() => deleteApiKey()} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
