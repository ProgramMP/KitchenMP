import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./UserProgressContext.jsx";
import cartReducer from "./CartContext.jsx";

const store = configureStore({
  reducer: {
    ui: uiReducer.reducer,
    cart: cartReducer.reducer,
  },
});

export default store;
