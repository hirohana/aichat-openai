import React, { Suspense as ReactSuspense } from "react";

type Props = {
  children: React.ReactNode;
  loadingIcon: JSX.Element;
};

export function Suspense({ children, loadingIcon }: Props) {
  return (
    <ReactSuspense
      fallback={
        <div className="flex justify-center items-center w-full h-screen">
          {loadingIcon}
        </div>
      }
    >
      {children}
    </ReactSuspense>
  );
}
