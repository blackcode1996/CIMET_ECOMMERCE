/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Navigate } from "react-router-dom";
import token from "../utils/token";

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(token());

  return isAuthenticated ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
