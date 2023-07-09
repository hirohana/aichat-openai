"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { GoogleAuthButton } from "src/components/elements/button/authButton/google/GoogleAuthButton";
import { HeadingText } from "src/components/elements/heading/HeadingText";
import { Footer } from "src/components/layouts/footer/Footer";
import { Header } from "src/components/layouts/header/Header";
import {
  CALLBACK_URL,
  CONTINUE_WITH_GOOGLE,
  GOOGLE,
  HOME,
  WELCOME_BACK,
} from "src/const";

function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get(CALLBACK_URL) || HOME;

  return (
    <div className="h-screen mx-4">
      <Header />
      <main className="flex flex-col justify-center items-center h-5/6 mx-4">
        <HeadingText text={WELCOME_BACK} />
        <GoogleAuthButton
          name={CONTINUE_WITH_GOOGLE}
          onClick={() => signIn(GOOGLE, { callbackUrl })}
        />
      </main>
      <Footer />
    </div>
  );
}

export { LoginPage };
