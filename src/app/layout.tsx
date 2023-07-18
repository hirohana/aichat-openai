import Layout from "src/components/layouts/rootLayout/RootLayout";

export const metadata = {
  title: "AIChat-OpenAI",
  description: "OpenAI API Conversation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
