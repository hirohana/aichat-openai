"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
  name: string;
  onClick: MouseEventHandler<HTMLDivElement>;
};

function GoogleAuthButton({ name, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="flex justify-center items-center px-4 py-4 bg-white border rounded-md cursor-pointer hover:bg-indigo-100"
    >
      <Image
        src="/icon/google.png"
        alt="google_icon"
        width="30"
        height="30"
        className="mr-2"
      />
      <button className="text-gray-500 font-semibold">{name}</button>
    </div>
  );
}

export { GoogleAuthButton };
