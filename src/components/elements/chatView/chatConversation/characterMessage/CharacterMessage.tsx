import {
  CharacterIcon,
  Props as IconProps,
} from "../characterIcon/CharacterIcon";
import {
  CharacterComment,
  Props as CommentProps,
} from "../characterComment/CharacterComment";

type Props = {
  iconProps: IconProps;
  commentProps: CommentProps;
  messageStyle?: string;
};

const CharacterMessage = (props: Props) => {
  const {
    iconProps,
    commentProps,
    messageStyle = "flex items-center p-4 bg-gray-50 whitespace-pre-wrap",
  } = props;

  return (
    <div className={messageStyle} key={commentProps.comment}>
      <div className="w-1/6 mr-2">
        <CharacterIcon url={iconProps.url} />
      </div>
      <div className="w-5/6">
        <CharacterComment comment={commentProps.comment} />
      </div>
    </div>
  );
};

export { CharacterMessage };
