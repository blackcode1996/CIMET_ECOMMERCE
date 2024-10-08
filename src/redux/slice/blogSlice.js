import { createSlice } from "@reduxjs/toolkit";



const blogSlice=createSlice({
    name:"blog",
    initialState:{
        blogItems: [],
        selectedItem: null,
        loading: false,
        error: null,
    },
    
})