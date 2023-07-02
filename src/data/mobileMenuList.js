import Link from "next/link";

const mobileMenuList = [
  <Link
    key="ホーム"
    href="/"
    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
  >
    ホーム
  </Link>,

  <Link
    key="ログイン"
    href="/login"
    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
  >
    ログイン
  </Link>,

  <Link
    key="ログアウト"
    href="/"
    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
  >
    ログアウト
  </Link>,

  <Link
    key="登録"
    href="/register"
    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
  >
    登録
  </Link>,
];

export { mobileMenuList };
