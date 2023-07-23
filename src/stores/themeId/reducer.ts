import { createSlice } from "@reduxjs/toolkit";

export type ThemeIdState = {
  value: string;
};

const initialState: ThemeIdState = {
  value: "",
};

export const themeIdSlice = createSlice({
  name: "themeId",
  initialState,
  reducers: {
    setThemeId: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setThemeId } = themeIdSlice.actions;

export default themeIdSlice.reducer;
