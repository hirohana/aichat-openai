import { Header } from "src/components/layouts/header/Header";
import Layout from "src/components/layouts/rootLayout/RootLayout";

export const metadata = {
  title: "AIChat-OpenAI-DeployTest2",
  description: "OpenAI API Conversation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
