import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showCart: "", showCheckout: "" },
  reducers: {
    showCart(state) {
      state.showCart = "cart";
    },
    hideCart(state) {
      state.showCart = "";
    },
    showCheckout(state) {
      state.showCheckout = "checkout";
    },
    hideCheckout(state) {
      state.showCheckout = "";
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
