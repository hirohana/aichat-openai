import { HeadingText } from "src/components/elements/heading/HeadingText";
import { HeadingDescription } from "src/components/elements/heading/HeadingDescription";
import { PrimaryLink } from "src/components/elements/link/PrimaryLink";
import { SecondaryLink } from "src/components/elements/link/SecondaryLink";

const AuthPage = () => {
  return (
    <div className="w-full h-screen mx-auto px-4 md:text-center">
      <div className="flex flex-col items-center justify-center h-full">
        <HeadingText text="ログイン・アカウント登録" />
        <HeadingDescription description="ログインする場合はログインボタン、アカウントを作成する場合は登録ボタンを押してください。" />
        <div className="flex items-center justify-center">
          <div className="mr-8">
            <PrimaryLink name="ログイン" href="/login" />
          </div>
          <SecondaryLink name="登録" href="/register" />
        </div>
      </div>
    </div>
  );
};

export { AuthPage };