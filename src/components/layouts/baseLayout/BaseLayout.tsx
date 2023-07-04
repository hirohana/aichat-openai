import ReduxProvider from "src/stores/Provider";
import { NextAuthProvider } from "src/features/auth/components/NextAuthProvider";

import { Header } from "src/components/layouts/header/Header";
import { Footer } from "src/components/layouts/footer/Footer";
import "src/styles/globals.css";

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <ReduxProvider>
          <NextAuthProvider>
            <Header />
            <main className="bg-gray-50">{children}</main>
            <Footer />
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

export { BaseLayout };
