// "use client";

import { getServerSession } from "next-auth";
import { authOptions } from "src/features/auth/libs/authOptions";

// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

function HomePage() {
  // const router = useRouter();
  // const session = await getServerSession(authOptions);

  // if (status === "loading") return;
  // if (status === "unauthenticated") router.push("/auth");
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        {/* <li>name: {session?.user?.name}</li>
        <li>email: {session?.user?.email}</li> */}
      </ul>
    </div>
  );
}

export { HomePage };
