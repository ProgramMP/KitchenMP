import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: { menu: false },
  reducers: {
    hideMenu(state) {
      state.menu = false;
    },
    showHideMenu(state) {
      state.menu = !state.menu;
    },
  },
});

export const menuActions = menuSlice.actions;

export default menuSlice;
