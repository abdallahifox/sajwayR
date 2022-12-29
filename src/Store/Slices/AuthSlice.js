import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isAuth: false,
  },
  reducers: {
    toggle(state) {
      state.isAuth = !state.isAuth;
    },
  },
});

export default authSlice.reducer;
export const authAction = authSlice.actions;
