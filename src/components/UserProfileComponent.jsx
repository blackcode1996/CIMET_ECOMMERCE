

import React from 'react'

const UserProfileModal = ({ isLoggedIn, username, closeModal }) => {
  return (
    <div className="absolute top-[65px] right-0 w-[300px] bg-primary shadow-lg p-5 rounded-md z-20">
      {isLoggedIn ? (
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-4 text-neutral">Hello, {username}!</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2">Edit Profile</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={closeModal}>
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-green-600 mb-2">Login</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign Up</button>
        </div>
      )}
    </div>
  )
}

export default UserProfileModal
