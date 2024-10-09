import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlog = createAsyncThunk(
    'content/fetchContent',
    async () => {
      const res = await axios('https://jsonplaceholder.typicode.com/photos')
      const data = await res.data
      console.log(data,"data");
      return data
    }
  )

const blogSlice=createSlice({
    name:"blog",
    initialState:{
        blogItems: [],
        selectedItem: null,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBlog.pending, (state) => {
          state.loading = true
        })
        builder.addCase(fetchBlog.fulfilled, (state, action) => {
          state.loading = false
          state.blogItems = action.payload
        })
        builder.addCase(fetchBlog.rejected, (state, action) => {
          state.loading = false
          state.error = action.error.message
        })
      },

})

export const blogData=(state)=>{
    return state.blog.blogItems
}

export default blogSlice.reducer