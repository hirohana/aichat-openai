import Link from "next/link";
import { signOut } from "next-auth/react";

import { AiOutlineHome, AiOutlineKey } from "react-icons/ai";
import { VscSignIn, VscSignOut } from "react-icons/vsc";
import { ReactNode } from "react";
import { MenuIconDetail } from "../IconDetail";

export const menuList = [
  {
    key: "ホーム",
    image: "",
    element: (
      <MenuListElement
        icon={<AiOutlineHome className="mr-2 sm:mr-4" />}
        name="ホーム"
        href="/"
      />
    ),
  },
  {
    key: "ログイン",
    image: "",
    element: (
      <MenuListElement
        icon={<VscSignIn className="mr-2 sm:mr-4" />}
        name="ログイン"
        href="/auth/login"
      />
    ),
  },
  {
    key: "APIKeyページ",
    image: "",
    element: (
      <MenuListElement
        icon={<AiOutlineKey className="mr-2 sm:mr-4" />}
        name="ログアウト"
        href="/api_key"
      />
    ),
  },
  {
    key: "ログアウト",
    image: "",
    element: (
      <div className="flex items-center w-full hover:bg-gray-100">
        <MenuIconDetail icon={<VscSignOut className="mr-2 sm:mr-4" />} />
        <button
          key="ログアウト"
          onClick={() => signOut({ callbackUrl: "/auth/login" })}
          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
        >
          ログアウト
        </button>
      </div>
    ),
  },
];

type Props = {
  icon: ReactNode;
  name: string;
  href: string;
};

function MenuListElement({ icon, name, href }: Props) {
  return (
    <div className="flex items-center w-full hover:bg-gray-100">
      <MenuIconDetail icon={icon} />
      <Link
        key={`${name}ページ`}
        href={`${href}`}
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 "
      >
        {name}ページ
      </Link>
    </div>
  );
}
