import axios from "axios";
import { userActions } from "./userSlice";

// login
export function loginUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "https://farshema.herokuapp.com/api/auth/login",
        user
      );
      dispatch(userActions.login(data));
      localStorage.setItem("currentUser", JSON.stringify(data));
    } catch (error) {
      const e =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      console.log("ERROR: ", e);
      dispatch(userActions.setError());
      setTimeout(() => {
        dispatch(userActions.clearError());
      }, 5000);
    }
  };
}

// logout
export function logoutUser() {
  return async (dispatch) => {
    dispatch(userActions.logout());
    localStorage.removeItem("currentUser");
  };
}

// register
export function registerUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "https://farshema.herokuapp.com/api/auth/register",
        user
      );
      dispatch(userActions.login(data));
      localStorage.setItem("currentUser", JSON.stringify(data));
    } catch (error) {
      const e =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      console.log("ERROR: ", e);
      dispatch(userActions.setError());
      setTimeout(() => {
        dispatch(userActions.clearError());
      }, 5000);
    }
  };
}
