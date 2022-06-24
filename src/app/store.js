import { configureStore } from "@reduxjs/toolkit";
import productReducers from "../features/ProductSlice";

export const store = configureStore({
  reducer: {
    product: productReducers,
  },
});
