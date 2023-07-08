type Props = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

const ChatMessageArea = (props: Props) => {
  const { message, setMessage } = props;
  return (
    <textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="resize-y w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
      rows={1}
      autoFocus
    ></textarea>
  );
};

export { ChatMessageArea };
export type { Props };
