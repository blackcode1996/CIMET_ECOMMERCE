import { EmailAuthProvider, getAuth, onAuthStateChanged, reauthenticateWithCredential, updatePassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { app } from '../utils/firebase'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { validatePassword } from '../utils/constants'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const UpdatePassword = () => {
    const auth = getAuth(app)
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                setEmail(user?.email)
            }
            else {
                localStorage.removeItem('token')
                navigate('/auth')
            }
        })
    }, [])


    const handlePasswordUpdate = (values) => {
        const { newPassword, currentPassword } = values
        const credential = EmailAuthProvider.credential(user?.email, currentPassword);
        if (user) {

            reauthenticateWithCredential(user, credential)
                .then(() => {
                    updatePassword(user, newPassword)
                        .then(() => {
                            toast.success(`Password updated successfully for ${email}`)
                            navigate('/profile')
                        })
                        .catch((error) => {
                            toast.error(`Error updating password: ${error.message}`)
                        });
                })
                .catch((error) => {
                    console.log(`Error updating password: ${error.message}`)
                    toast.error(`Error updating password: ${error.message}`);
                });
        } else {
            console.log("No user is signed in.");
            toast.error("No user is signed in.")
        }
    };

    return (

        <div className='flex justify-center mt-5 items-center'>
            <ToastContainer />
            <Formik
                initialValues={{ currentPassword: '', newPassword: '', confirmPassword: '' }}
                validate={(values) => {
                    const errors = {};

                    const validateOldPassword = validatePassword(values.currentPassword)
                    if (validateOldPassword.error) {
                        errors.currentPassword = validateOldPassword.message;
                    }

                    const passwordValidation = validatePassword(values.newPassword);
                    if (passwordValidation.error) {
                        errors.newPassword = passwordValidation.message;
                    }
                    if (values.newPassword !== values.confirmPassword) {
                        errors.confirmPassword = "Password Not Matched"
                    }
                    return errors


                }}

                onSubmit={(values, { }) => {
                    handlePasswordUpdate(values)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}
                        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
                    >
                        <h2 className="text-xl flex justify-center text-primary mb-4">Update Password</h2>


                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onBlur={handleBlur}
                                disabled
                                className={`w-full p-2 sm:p-2 border border-gray-300
             rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Current Password</label>
                            <input
                                type="password"
                                name="currentPassword"
                                value={values.currentPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`w-full p-2 sm:p-2 border ${touched.currentPassword && errors.currentPassword
                                        ? "border-red-500"
                                        : "border-gray-300"
                                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                            {touched.currentPassword && errors.currentPassword ? (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.currentPassword}
                                </div>
                            ) : null}
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">New Password</label>
                            <input
                                type="password"
                                name="newPassword"
                                value={values.newPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`w-full p-2 sm:p-2 border ${touched.newPassword && errors.newPassword
                                        ? "border-red-500"
                                        : "border-gray-300"
                                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                            {touched.newPassword && errors.newPassword ? (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.newPassword}
                                </div>
                            ) : null}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`w-full p-2 sm:p-2 border ${touched.confirmPassword && errors.confirmPassword
                                        ? "border-red-500"
                                        : "border-gray-300"
                                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                            {touched.confirmPassword && errors.confirmPassword ? (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.confirmPassword}
                                </div>
                            ) : null}
                        </div>

                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="w-full bg-primary text-neutral font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Submit
                        </button>


                    </form>
                )}

            </Formik>
        </div>
    )
}

export default UpdatePassword