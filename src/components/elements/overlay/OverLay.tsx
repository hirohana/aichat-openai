import { MouseEventHandler } from "react";

type Props = {
  isOpen: boolean;
  setOpenMenu: MouseEventHandler<HTMLDivElement>;
};

export function OverLay({ isOpen, setOpenMenu }: Props) {
  return (
    <>
      {isOpen && (
        <div
          onClick={setOpenMenu}
          className="fixed top-0 left-0 right-0 bottom-0 bg-gray-300 opacity-50"
        ></div>
      )}
    </>
  );
}
