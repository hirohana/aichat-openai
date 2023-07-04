import Link from "next/link";

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
        href="/login"
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
      <Link
        key="ログアウト"
        href="/"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        ログアウト
      </Link>
    ),
  },
  {
    key: "登録",
    image: "",
    element: (
      <Link
        key="登録"
        href="/register"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        登録
      </Link>
    ),
  },
];

export { menuList };
