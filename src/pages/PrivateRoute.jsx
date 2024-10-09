import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAuth } from "../redux/slice/authSlice";

const PrivateRoute = ({ children }) => {

   const auth = useSelector(isAuth)

  const [isAuthenticated, setIsAuthenticated] = useState(auth);

  return isAuthenticated ? children : <Navigate to="/auth" />;
};
export default PrivateRoute;
