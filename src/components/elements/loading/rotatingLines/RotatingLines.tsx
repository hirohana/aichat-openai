"use client";

import { RotatingLines as ReactRotatingLines } from "react-loader-spinner";

type Props = {
  topDistance?: string;
};

export function RotatingLines({ topDistance }: Props) {
  return (
    <div className={`absolute ${topDistance}`}>
      <ReactRotatingLines
        strokeColor="#6699FF"
        strokeWidth="5"
        animationDuration="0.75"
        width="36"
        visible={true}
      />
    </div>
  );
}
