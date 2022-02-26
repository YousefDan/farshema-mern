import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: { products: [], product: {} },
  reducers: {
    getProducts(state, action) {
      state.products = action.payload;
    },
    getSingleProduct(state, action) {
      state.product = action.payload;
    },
  },
});

const productActions = productSlice.actions;

export { productSlice, productActions };
