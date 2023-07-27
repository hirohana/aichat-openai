import { ChatSlug } from "src/components/pages/chat/ChatSlug";

export default function ChatPage({ params }: { params: { slug: string } }) {
  return <ChatSlug params={params} />;
}
