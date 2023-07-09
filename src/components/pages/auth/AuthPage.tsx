import { HeadingText } from "src/components/elements/heading/HeadingText";
import { HeadingDescription } from "src/components/elements/heading/HeadingDescription";
import { PrimaryLink } from "src/components/elements/link/PrimaryLink";
import { Header } from "src/components/layouts/header/Header";
import { Footer } from "src/components/layouts/footer/Footer";

function AuthPage() {
  return (
    <div className="h-screen mx-4">
      <Header />
      <main className="flex flex-col justify-center items-center h-5/6 ">
        <HeadingText text="ログイン・アカウント登録" />
        <HeadingDescription
          description={`初回ログインの方はアカウントも新規に作成されます。
      ご了承いただけた場合はログイン画面へお進みください。`}
        />
        <div className="flex items-center justify-center">
          <PrimaryLink name="ログイン画面へ" href="/auth/login" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export { AuthPage };
