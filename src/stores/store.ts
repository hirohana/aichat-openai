import { configureStore } from "@reduxjs/toolkit";
import openMenuReducer from "./openMenu/reducer";

type Store = {
  menuOpen: {
    isOpen: boolean;
  };
};

export const store = configureStore({
  reducer: {
    openMenu: openMenuReducer,
  },
});

export type { Store };
