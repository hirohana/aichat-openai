import { createSlice } from "@reduxjs/toolkit";

export const openMenuSlice = createSlice({
  name: "openMenu",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openMenu } = openMenuSlice.actions;

export default openMenuSlice.reducer;
