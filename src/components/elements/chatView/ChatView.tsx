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
    <>
      <div className=" h-5/6">
        <ChatConversation
          messages={messages}
          userIcon={userIcon}
          assistantIcon={assistantIcon}
          reply={reply}
          isLoading={isLoading}
        />
      </div>
      <div>
        <ChatForm
          handleSubmit={handleSubmit}
          textAreaProps={{ message, setMessage }}
        />
      </div>
    </>
  );
}
