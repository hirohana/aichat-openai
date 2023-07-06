import { PageFrame } from "src/components/layouts/pageFrame/PageFrame";
import { HeadingText } from "src/components/elements/heading/HeadingText";
import { HeadingDescription } from "src/components/elements/heading/HeadingDescription";
import { PrimaryLink } from "src/components/elements/link/PrimaryLink";
import { SecondaryLink } from "src/components/elements/link/SecondaryLink";

const AuthPage = () => {
  return (
    <PageFrame>
      <HeadingText text="ログイン・アカウント登録" />
      <HeadingDescription
        description={`初回ログインの方はアカウントも新規に作成されます。
      ご了承いただけた場合はログイン画面へお進みください。`}
      />
      <div className="flex items-center justify-center">
        <PrimaryLink name="ログイン画面へ" href="/auth/login" />
      </div>
    </PageFrame>
  );
};

export { AuthPage };
