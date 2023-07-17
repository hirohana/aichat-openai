import { useSession } from "next-auth/react";

export function UserList() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return;
  }
  return (
    <li className="pb-2 border-b font-semibold">
      {session?.user?.name ? session.user.name : "ゲストユーザー"}
    </li>
  );
}
