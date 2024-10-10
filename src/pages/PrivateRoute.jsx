import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

  //  const auth = localStorage.getItem('token') || null
    
  //  if(auth){
  //   setIsAuthenticated(true)
  //  }
    
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token') ? true : false);

  useEffect(()=>{
      console.log(localStorage.getItem('token'))
  }, [])

  return isAuthenticated ? children : <Navigate to="/auth" />;
};
export default PrivateRoute;
