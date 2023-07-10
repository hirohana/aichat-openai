"use client";

import { ChatConversation } from "./chatConversation/ChatConversation";
import { ChatForm } from "./chatForm/ChatForm";
import { useSideEffects } from "./useSideEffects";

type Props = {
  userIcon: string;
};

export default function ChatView({ userIcon }: Props) {
  const { message, setMessage, messages, isLoading, reply, sendMessageToApi } =
    useSideEffects();

  return (
    <div className="flex flex-col justify-between w-full h-full max-w-4xl">
      <ChatConversation
        messages={messages}
        userIcon={userIcon}
        assistantIcon="/icon/ai_icon.png"
        reply={reply}
        isLoading={isLoading}
      />
      <ChatForm
        handleSubmit={sendMessageToApi}
        textAreaProps={{ message, setMessage }}
      />
    </div>
  );
}
