import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./carrSlice";
import { productSlice } from "./productSlice";
import { userSlice } from "./userSlice";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
