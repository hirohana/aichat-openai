import Layout from "src/components/layouts/rootLayout/RootLayout";

export const metadata = {
  title: "AIChat-OpenAI-by-Hirohana",
  description: "create by hirohana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
