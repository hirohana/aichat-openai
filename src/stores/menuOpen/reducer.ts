import { createSlice } from "@reduxjs/toolkit";

export const menuOpenSlice = createSlice({
  name: "menuOpen",
  initialState: {
    isOpen: false,
  },
  reducers: {
    menuOpen: (state) => {
      console.log(state.isOpen);
      state.isOpen = !state.isOpen;
      console.log(state.isOpen);
    },
  },
});

export const { menuOpen } = menuOpenSlice.actions;

export default menuOpenSlice.reducer;
