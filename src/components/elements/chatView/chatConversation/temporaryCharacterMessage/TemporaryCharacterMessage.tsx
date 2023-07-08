import { CharacterComment } from "../characterComment/CharacterComment";
import { CharacterIcon } from "../characterIcon/CharacterIcon";
import { PingAnimation } from "src/components/elements/loading/pingAnimation/PingAnimation";

type Props = {
  assistantIcon: string;
  reply: string;
  isLoading: boolean;
};

const TemporaryCharacterMessage = (props: Props) => {
  const { assistantIcon, reply, isLoading } = props;

  return (
    <>
      {isLoading ? (
        <>
          <div className="flex items-center p-4 bg-gray-50 whitespace-pre-wrap">
            <div className="w-1/6 mr-2">
              <CharacterIcon url={assistantIcon} />
            </div>
            <div className="w-5/6">
              {reply ? <CharacterComment comment={reply} /> : <PingAnimation />}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export { TemporaryCharacterMessage };
