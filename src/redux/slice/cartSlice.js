import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
let wishlistArray = JSON.parse(localStorage.getItem("wishlist")) || [];

let baseURL = import.meta.env.VITE_NEW_BASE_URL;

export const getUserCartData = createAsyncThunk(
  "cart/getUserCartData",
  async () => {
    const res = await axios.get(`${baseURL}/cart/get`, {
      withCredentials: true,
    });
    const data = res.data;
    console.log(res, "res", data);
  }
);
export const addUserCartData = createAsyncThunk(
  "cart/addUserCartData",
  async (productData) => {
    const res = await axios.post(`${baseURL}/cart/add`, productData);
    console.log(res.data);
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartArray,
    wishlistItem: wishlistArray,
    loading: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const cartObject = { ...action.payload, quantity: 1 };
      const updatedCart = [...state.cartItems, cartObject];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      state.cartItems = updatedCart;
    },
    updateCart: (state, action) => {
      const { id, quantity } = action.payload;
      const updatedCart = state.cartItems.map((item) =>
        item.productId === id ? { ...item, quantity } : item
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      state.cartItems = updatedCart;
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.cartItems.filter(
        (item) => item.productId !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      state.cartItems = updatedCart;
    },
    resetCart: (state, action) => {
      localStorage.removeItem("cart");
      localStorage.removeItem("token");
      state.cartItems = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getUserCartData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserCartData.fulfilled, (state, action) => {
      state.loading = false;
      state.cartItems = action.payload.items;
    });
    builder.addCase(getUserCartData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(addUserCartData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addUserCartData.fulfilled, (state, action) => {
      state.loading = false;
      state.cartItems = action.payload.items;
    });
    builder.addCase(addUserCartData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const cartData = (state) => {
  return state.cart.cartItems;
};
export const { addToCart, updateCart, removeFromCart, resetCart } =
  cartSlice.actions;

export default cartSlice.reducer;
