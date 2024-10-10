import { createSlice } from "@reduxjs/toolkit"


let cartArray=JSON.parse(localStorage.getItem("cart"))|| []
let wishlistArray=JSON.parse(localStorage.getItem("wishlist"))||[]

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartItems:cartArray,
        wishlistItem:wishlistArray,
        loading: false,
        error: null,
    },
    reducers:{
        addToCart:(state,action)=>{
            const cartObject={...action.payload,quantity:1}
            const updatedCart = [...state.cartItems,cartObject];
            localStorage.setItem("cart", JSON.stringify(updatedCart)); 
            state.cartItems = updatedCart;
        },
        updateCart:(state,action)=>{
            const { id, quantity } = action.payload; 
            const updatedCart = state.cartItems.map(item => 
                item.productId === id ? { ...item, quantity } : item )

            localStorage.setItem("cart", JSON.stringify(updatedCart));
            state.cartItems = updatedCart;
        },
        removeFromCart:(state,action)=>{
            const updatedCart = state.cartItems.filter(item => item.productId !== action.payload.id); 
            localStorage.setItem("cart", JSON.stringify(updatedCart)); 
            state.cartItems = updatedCart;
        }
    }

})


export const cartData = (state)=>{
    return state.cart.cartItems;
}
export const {addToCart,updateCart,removeFromCart}=cartSlice.actions

export default cartSlice.reducer