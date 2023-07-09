import { CharacterMessage } from "./characterMessage/CharacterMessage";
import { TemporaryCharacterMessage } from "./temporaryCharacterMessage/TemporaryCharacterMessage";
import { useScrollToBottom } from "./useScrollToBottom";

type Message = {
  sender: string;
  text: string;
};

type Props = {
  messages: Message[];
  userIcon: string;
  assistantIcon: string;
  reply: string;
  isLoading: boolean;
};

const ChatConversation = (props: Props) => {
  const { messages, userIcon, assistantIcon, reply, isLoading } = props;

  const { divRef } = useScrollToBottom();

  return (
    <div
      className="w-full h-120 bg-gray-100 overflow-scroll text-lg"
      ref={divRef}
    >
      {!messages ? (
        <>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </>
      ) : (
        <>
          {messages.map((message) =>
            message.sender === "user" ? (
              <CharacterMessage
                messageStyle="flex items-center p-4 bg-sky-50 whitespace-pre-wrap"
                iconProps={{ url: userIcon }}
                commentProps={{ comment: message.text }}
                key={message.text}
              />
            ) : (
              <CharacterMessage
                messageStyle="flex items-center p-4 bg-gray-50 whitespace-pre-wrap"
                iconProps={{ url: assistantIcon }}
                commentProps={{ comment: message.text }}
                key={message.text}
              />
            )
          )}
          <TemporaryCharacterMessage
            reply={reply}
            assistantIcon={assistantIcon}
            isLoading={isLoading}
          />
        </>
      )}
    </div>
  );
};

export { ChatConversation };
