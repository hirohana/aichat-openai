"use client";

import { MutableRefObject, useEffect, useRef, useState } from "react";

import { SecondaryButton } from "src/components/elements/button/secondaryButton/SecondaryButton";
import { TertiaryButton } from "src/components/elements/button/tertiaryButton/TertiaryButton";
import { HeadingDescription } from "src/components/elements/heading/HeadingDescription";
import { HeadingText } from "src/components/elements/heading/HeadingText";
import { Footer } from "src/components/layouts/footer/Footer";
import { Header } from "src/components/layouts/header/Header";
import { registerApiKey, deleteApiKey } from "./hooks";
import { useCheckLocalAuthAndRedirect } from "src/hooks/useCheckLocalAuthAndRedirect";

export async function ApiKeyPage() {
  const ref = useRef<HTMLTextAreaElement>(null);
  useCheckLocalAuthAndRedirect();

  return (
    <div className="h-screen mx-4">
      <Header />
      <main className="flex flex-col justify-center items-center h-5/6 ">
        <HeadingText text="APIキー登録" />
        <HeadingDescription
          description={`APIキーをお持ちの方は、下記の入力欄にて登録をお願いいたします。キーは1時間後に削除されます。`}
        />

        <textarea
          ref={ref}
          placeholder="Input APIkey"
          className="w-full sm:max-w-md py-2 px-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
          rows={1}
          autoFocus
        ></textarea>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between sm:flex sm:w-96 ">
          <SecondaryButton
            name="登録"
            onClick={() => registerApiKey({ key: ref.current?.value })}
          />
          <TertiaryButton name="削除" onClick={() => deleteApiKey()} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
