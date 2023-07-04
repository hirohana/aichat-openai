import { MouseEventHandler } from "react";

type Props = {
  isOpen: boolean;
  setOpenMenu: MouseEventHandler<HTMLButtonElement>;
};

export function HamburgerButton({ isOpen, setOpenMenu }: Props) {
  return (
    <button onClick={setOpenMenu} type="button" className="z-10 space-y-2">
      <div
        className={
          isOpen
            ? "w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500"
            : "w-8 h-0.5 bg-gray-600 transition duration-500"
        }
      />
      <div
        className={
          isOpen
            ? "opacity-0 transition duration-500"
            : "w-8 h-0.5 bg-gray-600 transition duration-500"
        }
      />
      <div
        className={
          isOpen
            ? "w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500"
            : "w-8 h-0.5 bg-gray-600 transition duration-500"
        }
      />
    </button>
  );
}
