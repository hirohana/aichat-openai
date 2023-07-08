"use client";

import { ChatConversation } from "./chatConversation/ChatConversation";
import { ChatForm } from "./chatForm/ChatForm";
import { useSideEffects } from "./useSideEffects";

type Props = {
  userIcon: string;
};
export default function ChatView({ userIcon }: Props) {
  const {
    message,
    setMessage,
    messages,
    isLoading,
    reply,
    assistantIcon,
    handleSubmit,
  } = useSideEffects();

  return (
    <div className="max-w-screen-md mx-auto px-4 py-8">
      <div className=" bg-white rounded-lg shadow-lg overflow-hidden">
        <ChatConversation
          messages={messages}
          userIcon={userIcon}
          assistantIcon={assistantIcon}
          reply={reply}
          isLoading={isLoading}
        />
        <ChatForm
          handleSubmit={handleSubmit}
          textAreaProps={{ message, setMessage }}
        />
      </div>
    </div>
  );
}
