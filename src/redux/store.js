import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slice/blogSlice";
import productSlice from "./slice/productSlice";


export const store = configureStore({
    reducer: {
      blog: blogSlice,
      products: productSlice
    },
  })