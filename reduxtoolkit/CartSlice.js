// src/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          total: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.total += newItem.price;
      }
      state.totalPrice += newItem.price;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }
      state.totalPrice -= existingItem.price;
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
