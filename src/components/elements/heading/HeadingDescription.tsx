type Props = {
  description: string;
};

function HeadingDescription({ description }: Props) {
  return (
    <p className="mb-5 text-base text-gray-700 md:text-lg">{description}</p>
  );
}

export { HeadingDescription };
