"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function HomePage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") return;
  if (status === "unauthenticated") router.push("/auth");
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        <li>name: {session?.user?.name}</li>
        <li>name: {session?.user?.email}</li>
      </ul>
    </div>
  );
}

export { HomePage };
