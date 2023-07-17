// INFO アプリケーション全体で使用する型を定義

import { Session } from "next-auth";

// Redux StoreにあるopenMenuの型。
export type OpenMenu = {
  openMenu: {
    isOpen: boolean;
  };
};

// NextAuthライブラリから取得するsessionの型

export type SessionUser =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;
