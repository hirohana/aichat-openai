import { useSession } from "next-auth/react";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Image from "next/image";

export function UserList() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return;
  }

  return (
    <li className="flex pb-2 border-b font-semibold">
      <Image
        width={20}
        height={5}
        className="rounded mr-1"
        src={session?.user?.image ? session.user.image : ""}
        alt={session?.user?.name ? session.user.name : "ゲストユーザー"}
      />
      {session?.user?.name ? session.user.name : "ゲストユーザー"}
    </li>
  );
}
