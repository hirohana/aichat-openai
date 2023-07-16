"use client";

import { ChatConversation } from "./chatConversation/ChatConversation";
import { ChatForm } from "./chatForm/ChatForm";
import { useHooks } from "./hooks/index";

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
    getTokenFromOpenAI,
  } = useHooks();

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
        handleSubmit={getTokenFromOpenAI}
        textAreaProps={{ message, setMessage }}
      />
    </div>
  );
}
