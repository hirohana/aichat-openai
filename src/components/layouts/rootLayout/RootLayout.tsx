import ReduxProvider from "src/stores/Provider";
import { NextAuthProvider } from "src/features/api/auth/components/NextAuthProvider";

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
