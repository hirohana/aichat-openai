import Image from "next/image";
import { useSession } from "next-auth/react";
import { AiOutlineUser } from "react-icons/ai";
import { IconContext } from "react-icons";

export function UserList() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return;
  }

  if (status === "unauthenticated") {
    return (
      <li className="flex items-center pb-2 border-b font-semibold">
        <IconContext.Provider value={{ color: "#666666", size: "20px" }}>
          <AiOutlineUser className="mr-2 sm:mr-4" />
        </IconContext.Provider>
        <p>ゲストユーザー</p>
      </li>
    );
  }

  const { name, image } = session!.user as {
    name: string;
    email: string;
    image: string;
  };
  return (
    <li className="flex pb-2 border-b font-semibold">
      <Image
        width={20}
        height={20}
        className="rounded mr-2 sm:mr-4"
        src={image}
        alt={name}
      />
      {name}
    </li>
  );
}
