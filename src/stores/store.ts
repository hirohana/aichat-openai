import { configureStore } from "@reduxjs/toolkit";
import menuOpenReducer from "./menuOpen/reducer";

type Store = {
  menuOpen: {
    isOpen: boolean;
  };
};

export const store = configureStore({
  reducer: {
    menuOpen: menuOpenReducer,
  },
});

export type { Store };
