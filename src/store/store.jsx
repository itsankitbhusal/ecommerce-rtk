import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice.jsx";
import CartReducer from "./cartSlice.jsx";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    carts: CartReducer,
  },
});
