import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState :{
        isAuth :!!localStorage.getItem('token'),
        loading: false,
        userData: {
          name: '',
          email:''
        }

    },
    reducers :{
        setAuth: function(state) { 
            state.isAuth = true;
          },
        setUserData: function(state, action){
           state.userData
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