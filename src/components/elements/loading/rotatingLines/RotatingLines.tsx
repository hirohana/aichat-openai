"use client";

import { RotatingLines as ReactRotatingLines } from "react-loader-spinner";

export function RotatingLines() {
  return (
    <ReactRotatingLines
      strokeColor="#6699FF"
      strokeWidth="5"
      animationDuration="0.75"
      width="48"
      visible={true}
    />
  );
}
