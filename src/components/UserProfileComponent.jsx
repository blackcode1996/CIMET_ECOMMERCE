

import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import { app } from '../utils/firebase'
const auth = getAuth(app)

const UserProfileModal = ({ isLoggedIn, username, closeModal }) => {
  const logoutHandler=()=>{
    signOut(auth)
    localStorage.removeItem('token')
    localStorage.removeItem("cart")
    closeModal()
    navigate('/')
  }
  return (
    <div className="absolute top-[65px] right-0 w-[400px] bg-primary shadow-lg p-5 rounded-md z-20">
      {isLoggedIn ? (
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-4 text-neutral">Hello, {username}!</p>
          <div className='flex'>

          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2 hover:text-secondary"><Link to="/profile">View Profile</Link></button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2 hover:text-secondary"><Link to="/profile/updatePassword">Edit Profile</Link></button>

          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <button className=" text-white px-4 py-2 rounded hover:bg-secondary mb-2"><Link to="/auth">Login</Link></button>
          <button className=" text-white px-4 py-2 rounded hover:bg-secondary"><Link to="/auth">Sign Up</Link></button>
        </div>
      )}
    </div>
  )
}

export default UserProfileModal
