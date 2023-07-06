import Link from "next/link";
import { signOut } from "next-auth/react";

const menuList = [
  {
    key: "ホーム",
    image: "",
    element: (
      <Link
        key="ホーム"
        href="/"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        ホーム
      </Link>
    ),
  },
  {
    key: "ログイン",
    image: "",
    element: (
      <Link
        key="ログイン"
        href="/auth/login"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        ログイン
      </Link>
    ),
  },
  {
    key: "ログアウト",
    image: "",
    element: (
      <button
        key="ログアウト"
        onClick={() => signOut({ callbackUrl: "/auth/login" })}
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        ログアウト
      </button>
    ),
  },
];

export { menuList };
