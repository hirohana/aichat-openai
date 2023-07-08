type Props = {
  url: string;
  style?: string;
};

const CharacterIcon = (props: Props) => {
  const { url, style = "w-16 h-16 rounded-md overflow-hidden object-cover" } =
    props;
  return <img src={url} alt="character-icon" className={style} />;
};

export { CharacterIcon };
export type { Props };
