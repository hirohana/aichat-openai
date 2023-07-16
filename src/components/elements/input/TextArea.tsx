type Props = {
  value: string;
  placeholder?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

function TextArea(props: Props) {
  const { value, placeholder = "", setValue } = props;
  return (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className="w-full sm:max-w-md py-2 px-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
      rows={1}
      autoFocus
    ></textarea>
  );
}

export { TextArea };
export type { Props };
