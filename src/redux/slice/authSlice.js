import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState :{
        isAuth :!!localStorage.getItem('token'),
        loading: false,

    },
    reducers :{
        setAuth: function(state) { 
            state.isAuth = true;
          },
      logOut: function(state, action){
        state.isAuth = false
        localStorage.removeItem('token')
      }
    }
})

export const isAuth = function(state) {return state.auth.isAuth}

export const {setAuth, logOut} = authSlice.actions

export default authSlice.reducer