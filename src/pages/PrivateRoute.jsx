import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import token from "../utils/token";

const PrivateRoute = ({ children }) => {
    
  const [isAuthenticated, setIsAuthenticated] = useState(token());

  console.log(isAuthenticated)

  return isAuthenticated ? children : <Navigate to="/auth" />;
};
export default PrivateRoute;
