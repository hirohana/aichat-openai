import Link from "next/link";
import { signOut } from "next-auth/react";

const menuList = [
  {
    key: "ホームページ",
    image: "",
    element: (
      <Link
        key="ホームページ"
        href="/"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        ホームページ
      </Link>
    ),
  },
  {
    key: "ログインページ",
    image: "",
    element: (
      <Link
        key="ログインページ"
        href="/auth/login"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        ログインページ
      </Link>
    ),
  },
  {
    key: "ApiKeyページ",
    image: "",
    element: (
      <Link
        key="ApiKeyページ"
        href="/auth/api_key"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        ApiKeyページ
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
