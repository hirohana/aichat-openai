import { CharacterMessage } from "./characterMessage/CharacterMessage";
import { TemporaryCharacterMessage } from "./temporaryCharacterMessage/TemporaryCharacterMessage";
import { useScrollToBottom } from "./useScrollToBottom";
import { USER } from "src/const";
import { ChatForm } from "src/components/elements/chatView/chatForm/ChatForm";
import { SessionUser } from "src/types";
import { FormEvent, SetStateAction } from "react";

type Message = {
  sender: string;
  text: string;
};

// type Props = {
//   messages: Message[];
//   userIcon: string;
//   assistantIcon: string;
//   reply: string;
//   isLoading: boolean;
// };

type Props = {
  user: SessionUser;
  message: string;
  messages: {
    sender: string;
    text: string;
  }[];
  userIcon: string;
  assistantIcon: string;
  reply: string;
  isLoading: boolean;
  setMessage: React.Dispatch<SetStateAction<string>>;
  fetchTokenFromOpenAI: (e: FormEvent<HTMLFormElement>) => Promise<void>;
};

const ChatConversation = (props: Props) => {
  const {
    messages,
    userIcon,
    assistantIcon,
    reply,
    isLoading,
    fetchTokenFromOpenAI,
    message,
    setMessage,
  } = props;
  const { divRef } = useScrollToBottom();
  return (
    <div
      className="w-full h-120 sm:h-160 bg-gray-100 text-lg overflow-y-scroll mb-4"
      ref={divRef}
    >
      {messages.map((message) =>
        message.sender === USER ? (
          <CharacterMessage
            icon={userIcon}
            comment={message.text}
            key={message.text}
            sender={message.sender}
          />
        ) : (
          <CharacterMessage
            icon={assistantIcon}
            comment={message.text}
            key={message.text}
            sender={message.sender}
          />
        )
      )}
      <TemporaryCharacterMessage
        reply={reply}
        assistantIcon={assistantIcon}
        isLoading={isLoading}
      />
    </div>
  );
};

export { ChatConversation };
