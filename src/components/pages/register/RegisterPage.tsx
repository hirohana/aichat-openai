"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { GoogleAuthButton } from "src/components/elements/button/authButton/google/GoogleAuthButton";
import { HeadingText } from "src/components/elements/heading/HeadingText";
import { PageFrame } from "src/components/layouts/pageFrame/PageFrame";
import {
  CALLBACK_URL,
  GOOGLE,
  HOME,
  PLEASE_REGISTER,
  REGISTER_WITH_GOOGLE,
} from "src/const";

function RegisterPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get(CALLBACK_URL) || HOME;

  return (
    <PageFrame>
      <div className="flex flex-col items-center justify-center w-11/12 h-3/4 sm:max-w-md sm:max-h-md bg-white rounded-xl">
        <div className="mx-2">
          <HeadingText text={PLEASE_REGISTER} />
          <GoogleAuthButton
            name={REGISTER_WITH_GOOGLE}
            onClick={() => signIn(GOOGLE, { callbackUrl })}
          />
        </div>
      </div>
    </PageFrame>
  );
}

export { RegisterPage };
