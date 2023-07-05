"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { GoogleAuthButton } from "src/components/elements/button/authButton/google/GoogleAuthButton";
import { CALLBACK_URL, CONTINUE_WITH_GOOGLE, GOOGLE, HOME } from "src/const";

function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get(CALLBACK_URL) || HOME;

  return (
    <div>
      <GoogleAuthButton
        name={CONTINUE_WITH_GOOGLE}
        onClick={() => signIn(GOOGLE, { callbackUrl })}
      />
    </div>
  );
}

export { LoginPage };
