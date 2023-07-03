type Props = {
  text: string;
};

function HeadingText({ text }: Props) {
  return (
    <h2 className="text-center text-gray-900 text-3xl sm:text-4xl font-bold mb-5">
      {text}
    </h2>
  );
}

export { HeadingText };
