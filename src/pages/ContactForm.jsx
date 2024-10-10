import { ErrorMessage, Field, Formik } from 'formik'
import React from 'react'
import { validateEmail } from '../utils/constants';

const ContactForm = () => {
  return (
    <Formik
    initialValues={{ name: '', email: '', message: '' }}
    validate={(values) => {
      const errors = {};
      const validate = validateEmail(values.email)
      if (validate.error) {
          errors.email = validate.message;
      }
      return errors
  }}
    onSubmit={(values, {}) =>{
      console.log("VALIES", values)
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      resetForm
    }) => (
      <div className='flex justify-center mt-5'>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-4">Contact Us</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <Field
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-2 border ${touched.name && errors.name ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <Field
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-2 border ${touched.email && errors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <Field
            as="textarea"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="4"
            className={`w-full p-2 border ${touched.message && errors.message ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      </div>
    )}
  </Formik>
  )
}

export default ContactForm