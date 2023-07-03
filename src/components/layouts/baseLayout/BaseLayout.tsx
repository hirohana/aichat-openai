import { NextAuthProvider } from "src/features/auth/components/NextAuthProvider";
import { Header } from "src/components/layouts/header/Header";
import { Footer } from "src/components/layouts/footer/Footer";

import "src/styles/globals.css";

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="bg-gray-50">
          <NextAuthProvider>{children}</NextAuthProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}

export { BaseLayout };
