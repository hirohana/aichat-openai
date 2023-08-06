import { KeyboardEvent, KeyboardEventHandler } from "react";

type Props = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  onKeyDown: any;
};

const ChatMessageArea = (props: Props) => {
  const { message, setMessage, onKeyDown } = props;

  const handleEnterKeyPress = (
    e: KeyboardEvent<HTMLTextAreaElement>,
    onKeyDown: KeyboardEventHandler<HTMLTextAreaElement>
  ) => {
    if (e.key !== "Enter") return;
    onKeyDown(e);
  };

  return (
    <textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={(e) => handleEnterKeyPress(e, onKeyDown)}
      placeholder="Send a message"
      className="w-full sm:max-w-5xl py-2 px-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
      rows={1}
      autoFocus
    ></textarea>
  );
};

export { ChatMessageArea };
export type { Props };
