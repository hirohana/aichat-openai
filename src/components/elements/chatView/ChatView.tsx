import { FormEvent, SetStateAction } from "react";
import { ChatConversation } from "src/components/elements/chatView/chatConversation/ChatConversation";
import { SessionUser } from "src/types";
import { ChatForm } from "./chatForm/ChatForm";

type Props = {
  user: SessionUser;
  message: string;
  messages: {
    sender: string;
    text: string;
  }[];
  reply: string;
  isLoading: boolean;
  setMessage: React.Dispatch<SetStateAction<string>>;
  fetchTokenFromOpenAI: (e: FormEvent<HTMLFormElement>) => Promise<void>;
};

export default function ChatView({
  user,
  message,
  messages,
  reply,
  isLoading,
  setMessage,
  fetchTokenFromOpenAI,
}: Props) {
  return (
    <>
      {user?.image && (
        <div className="flex flex-col justify-center w-full h-full max-w-4xl">
          <ChatConversation
            messages={messages}
            userIcon={user.image}
            assistantIcon="/icon/ai_icon.png"
            reply={reply}
            isLoading={isLoading}
          />
          <ChatForm
            handleSubmit={fetchTokenFromOpenAI}
            textAreaProps={{
              message,
              setMessage,
              onKeyDown: fetchTokenFromOpenAI,
            }}
          />
        </div>
      )}
    </>
  );
}
