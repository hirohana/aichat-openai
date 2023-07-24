import ReduxProvider from "src/stores/Provider";
import { NextAuthProvider } from "src/features/api/auth/components/NextAuthProvider";

import "src/styles/globals.css";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <ReduxProvider>
          <NextAuthProvider>
            <Header />
            {children}
            <Footer />
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
