import {getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { app } from "../utils/firebase"
import { useEffect, useState } from "react"


const auth  = getAuth(app)

const Profile = () => {

  const [user, setUser] = useState('')

// useEffect(()=>{
// onAuthStateChanged(auth, user =>{
//   if(user){
//   console.log("USER", user)
//   }
//   else {
//     console.log("SIGNED OUT")
//   }
// })
// }, [])

const handleSignOut =()=>{
  signOut(auth)
}

  return (
    <div>
      Profile
      it is my profile
      <button onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  )
}

export default Profile
