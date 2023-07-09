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
    <div className="flex flex-col justify-between w-full h-full">
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
  );
}
