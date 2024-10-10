import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlog = createAsyncThunk(
    'blog/fetchBlog',
    async () => {
      const res = await axios('https://jsonplaceholder.typicode.com/posts')
      const data = await res.data
      return data
    }
  )
  export const fetchSingleBlog=createAsyncThunk(
    'blog/fetchSingleBlog',
    async(postId)=>{
      
      const res=await axios(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      const data=await res.data
      return data
      
      
    }
  )

const blogSlice=createSlice({
    name:"blog",
    initialState:{
        blogItems: [],
        singleBlogItem:{},
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
        builder.addCase(fetchSingleBlog.pending, (state) => {
          state.loading = true
        })
        builder.addCase(fetchSingleBlog.fulfilled, (state, action) => {
          state.loading = false
          state.singleBlogItem = action.payload
        })
        builder.addCase(fetchSingleBlog.rejected, (state, action) => {
          state.loading = false
          state.error = action.error.message
        })
      },

})

export const blogData=(state)=>{
    return state.blog.blogItems
}
export const singleBlogData=(state)=>{
  return state.blog.singleBlogItem
}

export default blogSlice.reducer