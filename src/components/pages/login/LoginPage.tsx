"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { GoogleAuthButton } from "src/components/elements/button/authButton/google/GoogleAuthButton";
import { HeadingText } from "src/components/elements/heading/HeadingText";
import { PageFrame } from "src/components/layouts/pageFrame/PageFrame";
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
    <PageFrame>
      <div className="flex flex-col items-center justify-center w-11/12 h-3/4 sm:max-w-md sm:max-h-md bg-white rounded-xl">
        <div className="mx-2">
          <HeadingText text={WELCOME_BACK} />
          <GoogleAuthButton
            name={CONTINUE_WITH_GOOGLE}
            onClick={() => signIn(GOOGLE, { callbackUrl })}
          />
        </div>
      </div>
    </PageFrame>
  );
}

export { LoginPage };
