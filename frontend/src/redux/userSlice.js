import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null,
      error: false,
  },
  reducers: {
    login(state, action) {
      state.currentUser = action.payload;
    },
    logout(state) {
        state.currentUser = null;
    },
    setError(state) {
        state.error = true;
    },
    clearError(state) {
        state.error = false;
    }

  },
});

const userActions = userSlice.actions;

export { userSlice, userActions };
