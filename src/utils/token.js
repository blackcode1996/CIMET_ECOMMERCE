import { getAuth, signOut } from "firebase/auth"
import { app } from "./firebase"
// import { useNavigate } from "react-router-dom"

const auth = getAuth(app)
// const navigate = useNavigate()

export default function token(){
   const token = localStorage.getItem('token') ? true : false 
   if(!token){
      signOut(auth)
   }
   return token
}

// export function getUser(){
//    onAuthStateChanged(auth, user => {
//       if (user) {
//        return user
//       }
//       else {
//          localStorage.removeItem('token')
//          navigate('/login')
//          return null
//       }
//     })
// }

