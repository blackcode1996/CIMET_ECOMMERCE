/* eslint-disable react/prop-types */
import { Formik } from "formik";
import { validateEmail, validatePassword } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/firebase";
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
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
        try {
          const { success, message } = await loginUser(
            values.email,
            values.password
          ); // Await the loginUser function

          if (success) {
            toast.success(message);
            navigate("/profile");
          } else {
            toast.error(message);
          }
        } catch (error) {
          toast.error("An error occurred during login.", error);
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
            Log In
          </h2>
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
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <div className="my-2 flex w-full justify-center">
            Create New Account
            <span
              className="underline cursor-pointer mx-3"
              onClick={() => {
                navigate("/signup");
                resetForm();
              }}
            >
              SignUp
            </span>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
