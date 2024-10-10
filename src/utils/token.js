import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { app } from "./firebase"

const auth = getAuth(app)
export default function token(){

   const token = localStorage.getItem('token') ? true : false 

   if(!token){
      signOut(auth)
   }

   return token

}

export function getUser(){

   onAuthStateChanged(auth, user => {
      if (user) {
       return user
      }
      else {
         localStorage.removeItem('token')
         navigate('/auth')
         return null
      }
    })
}