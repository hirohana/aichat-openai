"use client";

import { MouseEventHandler } from "react";

type Props = {
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function GoogleAuthButton({ name, onClick }: Props) {
  return (
    <div className="w-2/3 sm:max-w-sm py-4 px-2 text-center">
      <button onClick={onClick}>{name}</button>
    </div>
  );
}

export { GoogleAuthButton };
