import ReduxProvider from "src/stores/Provider";
import { NextAuthProvider } from "src/features/auth/components/NextAuthProvider";

import { Header } from "src/components/layouts/header/Header";
import { Footer } from "src/components/layouts/footer/Footer";
import "src/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <ReduxProvider>
          <NextAuthProvider>{children}</NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
