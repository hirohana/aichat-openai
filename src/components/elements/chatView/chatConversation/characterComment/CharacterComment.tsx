type Props = {
  comment: string;
  style?: string;
};

const CharacterComment = (props: Props) => {
  const { comment, style } = props;
  return <span className={style}>{comment}</span>;
};

export { CharacterComment };
export type { Props };
