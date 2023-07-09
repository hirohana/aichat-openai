import {
  ChatMessageArea,
  Props as TextAreaProps,
} from "./chatMessageArea/ChatMessageArea";
import { SendButton } from "./sendButton/SendButton";

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  textAreaProps: TextAreaProps;
};

const ChatForm = (props: Props) => {
  const { handleSubmit, textAreaProps } = props;

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-center w-full"
    >
      <ChatMessageArea
        message={textAreaProps.message}
        setMessage={textAreaProps.setMessage}
      />
      <SendButton name="送信" />
    </form>
  );
};

export { ChatForm };
