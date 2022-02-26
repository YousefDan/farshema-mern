import { cartActions } from "./carrSlice";

// add to cart
export function addToCart(product) {
  return async (dispatch) => {
    dispatch(cartActions.addToCart(product));
  };
}
