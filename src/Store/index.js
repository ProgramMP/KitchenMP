import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./UserProgressContext.jsx";
import cartReducer from "./CartContext.jsx";
import menuReducer from "./Sandwich.jsx";

const store = configureStore({
  reducer: {
    ui: uiReducer.reducer,
    cart: cartReducer.reducer,
    menu: menuReducer.reducer,
  },
});

export default store;
