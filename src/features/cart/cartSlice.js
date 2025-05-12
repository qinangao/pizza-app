import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   cart: [],
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload:newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload:pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload:pizzaId
      const selecteditem = state.cart.find(
        (item) => item.pizzaId === action.payload
      );
      selecteditem.quantity++;
      selecteditem.totalPrice = selecteditem.quantity * selecteditem.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //payload:pizzaId
      const selecteditem = state.cart.find(
        (item) => item.pizzaId === action.payload
      );
      selecteditem.quantity--;
      selecteditem.totalPrice = selecteditem.quantity * selecteditem.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
