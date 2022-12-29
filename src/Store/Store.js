import { configureStore } from "@reduxjs/toolkit";

//TODO: import slices
import authSlice from "./Slices/AuthSlice";

const store = configureStore({
  reducer: {
    authSlice,
  },
});

export default store;
