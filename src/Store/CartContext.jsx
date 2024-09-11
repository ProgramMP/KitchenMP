import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );

      const updatedItems = [...state.items];

      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];

        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...newItem, quantity: 1 });
      }
      state.items = updatedItems;
    },

    removeItem(state, action) {
      const id = action.payload;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      const updatedItems = [...state.items];

      if (existingCartItem.quantity === 1) {
        updatedItems.splice(existingCartItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      state.items = updatedItems;
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
