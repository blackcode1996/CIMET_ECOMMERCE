import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL

export const signUp = createAsyncThunk('auth/signup', async(values)=>{
  const res = await axios.post(`${base_url}/user/register`, values)
  const data = await res.data
  return data
})

export const logIn= createAsyncThunk('auth/login', async(values)=>{
  const res = await axios.post(`${base_url}/user/login`, values)
   const data = await res.data
   return data
})


export const logOut = createAsyncThunk('/auth/logout', async()=>{
  const res = await axios.post(`${base_url}/user/logout`)
  const data = await res.data
  return data
})

const authSlice = createSlice({
    name: "auth",
    initialState :{
        isAuth :!false,
        loading: false,
        userData: [],
        error : null
    },
    extraReducers:(builder)=>{

      builder.addCase(signUp.pending, (state)=>{
        state.loading = true
      })
      builder.addCase(signUp.fulfilled,(state, action)=>{
        state.loading = false,
        state.isAuth = true
      })
      builder.addCase(signUp.rejected, (state, action)=>{
        state.loading = false
        state.error = action.error.message
      })

      builder.addCase(logIn.pending,(state)=>{
        state.loading = true
      })
      builder.addCase(logIn.fulfilled,(state, action)=>{
        state.loading = false
        state.userData = action.payload
      })
      builder.addCase(logIn.rejected,(state, action)=>{
        state.loading = false
        state.error = action.error.message
      })
    }
})

export const signUpUser = (state)=>{
    return state.auth.userData
}

export default authSlice.reducer