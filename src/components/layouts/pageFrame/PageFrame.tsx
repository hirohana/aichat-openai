import React from "react";

type Props = {
  children: React.ReactNode;
};

export function PageFrame({ children }: Props) {
  return (
    <div className="w-full h-screen mx-auto px-4 md:text-center">
      <div className="flex flex-col items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
}
