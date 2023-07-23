// INFO アプリケーション全体で使用する型を定義

// Redux StoreにあるopenMenuの型。
export type OpenMenu = {
  openMenu: {
    isOpen: boolean;
  };
};

// Redux StoreにあるthemeIdの型
export type ThemeId = {
  themeId: {
    value: string;
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
