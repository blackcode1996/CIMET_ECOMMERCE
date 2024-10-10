/* eslint-disable react/prop-types */
import { Formik } from "formik";
import { validateEmail, validatePassword } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { createUserByEmail } from "../utils/firebase";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: "", password: "", name: "" }}
      validate={(values) => {
        const errors = {};

        const emailValidation = validateEmail(values.email);
        if (emailValidation.error) {
          errors.email = emailValidation.message;
        }

        const passwordValidation = validatePassword(values.password);
        if (passwordValidation.error) {
          errors.password = passwordValidation.message;
        }
        return errors;
      }}
      onSubmit={async (values) => {
        const { success, message } = await createUserByEmail(
          values.name,
          values.email,
          values.password
        );
        if (success) {
          toast.success(message);
          navigate("/login");
        } else {
          toast.error(message);
        }
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
        resetForm,
      }) => (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-sm sm:max-w-md md:max-w-lg lg:max-w-l mx-auto my-8 sm:my-16"
        >
          <h2 className="text-xl flex justify-center text-primary w-full py-1 sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
            Sign Up
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-1 sm:p-2 border ${
                touched.name && errors.name
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {touched.name && errors.name ? (
              <div className="text-red-500 text-sm mt-1">{errors.name}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-2 sm:p-2 border ${
                touched.email && errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {touched.email && errors.email ? (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            ) : null}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-2 sm:p-2 border ${
                touched.password && errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {touched.password && errors.password ? (
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            ) : null}
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-primary text-neutral font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </button>

          <div className="my-2 flex w-full justify-center">
            Already Registered?
            <span
              className="underline cursor-pointer mx-3"
              onClick={() => {
                navigate("/login");
                resetForm();
              }}
            >
              Log In
            </span>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;
