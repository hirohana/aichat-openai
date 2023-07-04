import { MouseEventHandler } from "react";

type Props = {
  openMenu: boolean;
  setOpenMenu: MouseEventHandler<HTMLButtonElement>;
};

export function HamburgerButton({ openMenu, setOpenMenu }: Props) {
  return (
    <button onClick={setOpenMenu} type="button" className="z-10 space-y-2">
      <div
        className={
          openMenu
            ? "w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500"
            : "w-8 h-0.5 bg-gray-600 transition duration-500"
        }
      />
      <div
        className={
          openMenu
            ? "opacity-0 transition duration-500"
            : "w-8 h-0.5 bg-gray-600 transition duration-500"
        }
      />
      <div
        className={
          openMenu
            ? "w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500"
            : "w-8 h-0.5 bg-gray-600 transition duration-500"
        }
      />
    </button>
  );
}
