import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { SessionUser } from "src/types";

export function useAuthCheckAndRedirect(): SessionUser {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [status, router]);

  return session?.user;
}
