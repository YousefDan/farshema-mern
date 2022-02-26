import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [] },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const isExist = state.cart.find((item) => item._id === newItem._id);

      if (isExist) {
        state.cart = state.cart.map((item) =>
          item._id === newItem._id ? newItem : item
        );
      } else {
        state.cart = [...state.cart, newItem];
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cart));
    },
    removeFromCart(state, action) {
        state.cart = state.cart.filter(item => item._id !== action.payload);
        const localS = JSON.parse(localStorage.getItem("cartItem"));
        const newItems = localS.filter(item => item._id !== action.payload);
        localStorage.setItem("cartItem", JSON.stringify(newItems));
    },
  },
});

const cartActions = cartSlice.actions;

export { cartSlice, cartActions };
