import { configureStore } from "@reduxjs/toolkit";
import openMenuReducer from "./openMenu/reducer";
import themeIdReducer from "./themeId/reducer";

export const store = configureStore({
  reducer: {
    openMenu: openMenuReducer,
    themeId: themeIdReducer,
  },
});
