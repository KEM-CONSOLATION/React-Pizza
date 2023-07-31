/*eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // cart:[],
  cart: [
    {
      pizzaId: 12,
      name: 'Meditarean',
      quantity: 2,
      unitiPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {},
    deleteItem(state, action) {},
    increaseItemQuantity(state, action) {},
    decreaseItemQuantity(state, action) {},
    clearCart(state, action) {},
  },
});
