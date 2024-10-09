import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slice/blogSlice";
import authSlice from "./slice/authSlice";


export const store = configureStore({
    reducer: {
      blog: blogSlice,
      auth : authSlice
    },
  })