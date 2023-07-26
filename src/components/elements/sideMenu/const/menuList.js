import Link from "next/link";
import { signOut } from "next-auth/react";

import { AiOutlineHome, AiOutlineKey } from "react-icons/ai";
import { VscSignIn, VscSignOut } from "react-icons/vsc";
import { IconContext } from "react-icons";

const menuList = [
  {
    key: "ホームページ",
    image: "",
    element: (
      <div className="flex items-center">
        <IconContext.Provider value={{ color: "#666666", size: "20px" }}>
          <AiOutlineHome className="mr-1" />
        </IconContext.Provider>
        <Link
          key="ホームページ"
          href="/"
          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          ホームページ
        </Link>
      </div>
    ),
  },
  {
    key: "ログインページ",
    image: "",
    element: (
      <div className="flex items-center">
        <IconContext.Provider value={{ color: "#666666", size: "20px" }}>
          <VscSignIn className="mr-1" />
        </IconContext.Provider>
        <Link
          key="ログインページ"
          href="/auth/login"
          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          ログインページ
        </Link>
      </div>
    ),
  },
  {
    key: "APIKeyページ",
    image: "",
    element: (
      <div className="flex items-center">
        <IconContext.Provider value={{ color: "#666666", size: "20px" }}>
          <AiOutlineKey className="mr-1" />
        </IconContext.Provider>
        <Link
          key="APIKeyページ"
          href="/api_key"
          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          APIKeyページ
        </Link>
      </div>
    ),
  },
  {
    key: "ログアウト",
    image: "",
    element: (
      <div className="flex items-center">
        <IconContext.Provider value={{ color: "#666666", size: "20px" }}>
          <VscSignOut className="mr-1" />
        </IconContext.Provider>
        <button
          key="ログアウト"
          onClick={() => signOut({ callbackUrl: "/auth/login" })}
          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          ログアウト
        </button>
      </div>
    ),
  },
];

export { menuList };
