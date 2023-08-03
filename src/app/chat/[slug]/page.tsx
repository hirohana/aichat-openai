import { ChatSlugPage } from "src/components/pages/chat/ChatSlugPage";

export default function ChatSlug({ params }: { params: { slug: string } }) {
  return <ChatSlugPage params={params} />
}