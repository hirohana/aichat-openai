import { CharacterIcon } from "../characterIcon/CharacterIcon";
import { CharacterComment } from "../characterComment/CharacterComment";
import { USER } from "src/const";

type Props = {
  icon: string;
  comment: string;
  sender: string;
};

const CharacterMessage = (props: Props) => {
  const { icon, comment, sender } = props;

  return (
    <div
      className={`flex items-center p-4 whitespace-pre-wrap ${
        sender === USER ? "bg-sky-50" : "bg-gray-50"
      }`}
      key={comment}
    >
      <div className="w-1/6 mr-2 sm:w-1/12 sm:mr-0">
        <CharacterIcon url={icon} />
      </div>
      <div className="w-5/6 sm:w-11/12">
        <CharacterComment comment={comment} />
      </div>
    </div>
  );
};

export { CharacterMessage };
