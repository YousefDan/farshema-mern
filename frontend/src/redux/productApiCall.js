import axios from "axios";
import { productActions } from "./productSlice";

// fetch all the products
export function fetchProducts() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "https://farshema.herokuapp.com/api/products"
      );
      dispatch(productActions.getProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
}
// fetch a single product
export function fetchSingleProduct(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://farshema.herokuapp.com/api/products/${id}`
      );
      dispatch(productActions.getSingleProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
}
