import { ChatSlugPage } from "src/components/pages/chat/ChatSlugPage";

export type Props = {
  params: {
    slug: string;
  };
};

export default function ChatSlug({ params }: Props) {
  return <ChatSlugPage params={params} />;
}
