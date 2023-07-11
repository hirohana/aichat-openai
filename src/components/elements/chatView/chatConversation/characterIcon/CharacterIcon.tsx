import Image from "next/image";

type Props = {
  url: string;
};

const CharacterIcon = (props: Props) => {
  const { url } = props;
  return (
    <Image
      src={url}
      alt="character-icon"
      className="rounded-md overflow-hidden object-cover"
      width={32}
      height={32}
    />
  );
};

export { CharacterIcon };
export type { Props };
