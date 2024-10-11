/* eslint-disable react-hooks/exhaustive-deps */
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { app } from "../utils/firebase"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const auth = getAuth(app)

const Profile = () => {
  const navigate = useNavigate()

  const [userData, setUserData] = useState('')

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUserData(user)
      }
      else {
        localStorage.removeItem('token')
        navigate('/')
      }
    })
    window.scrollTo(0,0);
  }, [])

  return (
    <div>

      <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
        <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm  top-12">

            <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

            <a href="#" className="flex items-center justify-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full">
              Profile
            </a>
          </div>
        </aside>
        <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4 border-l-2">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>

              <div className="grid max-w-xl mx-auto mt-8">
                <div className="flex justify-between flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                  <div className="flex items-center justify-center object-cover w-40 h-40 p-2 rounded-full ring-2 ring-indigo-300 bg-primary text-neutral  dark:ring-indigo-500 bg-indigo-200">
                    <span className="text-7xl font-bold text-indigo-700">
                      {userData?.displayName?.charAt(0)}
                      </span>
                  </div>

                  <div className="flex flex-col space-y-5 sm:ml-8">
                    <button type="button" onClick={()=>navigate('/profile/updatePassword')}
                      className="py-3.5 px-7 text-base font-medium text-primary focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                      Update Password
                    </button>
                    <button type="button" onClick={() => signOut(auth)}
                      className="py-3.5 px-7 text-base font-medium text-neutral focus:outline-none bg-primary rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200  ">
                      Log Out
                    </button>
                  </div>
                </div>

                <div className="items-center mt-8 sm:mt-14 text-[#202142]">

                  <div
                    className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                    <div className="w-full">
                      <label htmlFor="first_name"
                        className="block mb-2 text-l text-primary font-bold ">User Name</label>
                      <input type="text" id="first_name"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="Your full name" value={userData?.displayName}
                        disabled
                        required />
                    </div>
                  </div>
                  <div className="mb-2 sm:mb-6">
                    <label htmlFor="email"
                      className="block mb-2 text-l font-semibold text-primary dark:text-primary">Registered
                      email</label>
                    <input type="email" id="email"
                      value={userData.email}
                      disabled
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="your.email@mail.com" required />
                  </div>
                  <div className="flex justify-end">
                    <button type="submit"
                      className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </main>
      </div>







    </div>
  )
}

export default Profile
