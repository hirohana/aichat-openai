"use client";

import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "./store";

type Props = {
  children: React.ReactNode;
};

function Provider({ children }: Props) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}

export default Provider;
