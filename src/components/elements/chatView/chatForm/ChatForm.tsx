import { PrimaryButton } from "src/components/elements/button/primaryButton/PrimaryButton";
import {
  ChatMessageArea,
  Props as TextAreaProps,
} from "./chatMessageArea/ChatMessageArea";

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  textAreaProps: TextAreaProps;
};

const ChatForm = (props: Props) => {
  const { handleSubmit, textAreaProps } = props;

  return (
    <div className="px-6 py-4">
      <div className="mb-4">
        <form className="flex" onSubmit={(e) => handleSubmit(e)}>
          <ChatMessageArea
            message={textAreaProps.message}
            setMessage={textAreaProps.setMessage}
          />
          <PrimaryButton name="送信" />
        </form>
      </div>
    </div>
  );
};

export { ChatForm };
