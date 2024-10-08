import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../utils/firebase";
import { toast, ToastContainer } from "react-toastify";
import SignUpForm from "../components/SignUpForm";
import 'react-toastify/dist/ReactToastify.css';


const auth = getAuth(app);

const Authentication = () => {
  const [signInInfo, setSignInInfo] = useState({
    email: "",
    password: "",
  });

  const [verifyAuth, setVerifyAuth] = useState("signUp");

  useEffect(()=>{  
    console.log(verifyAuth)

  }, [verifyAuth])

  const handleAuth = (value) => {
    console.log("SIGNIN", signInInfo, value);
    const {email,password} = value

    if (verifyAuth === "signUp") {
      createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
        .then((value) => {
          console.log("LogIn SuccesssFully", value);
          toast.success("LogIn SuccessFull");
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((value) => {
          toast.success("Log In Success");
          console.log(value);
        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <>
    <ToastContainer />
    <SignUpForm
      handleAuth={handleAuth}
      verifyAuth={verifyAuth}
      signInInfo={signInInfo}
      setSignInInfo={setSignInInfo}
      setVerifyAuth={setVerifyAuth}
    />
    </>
  );
};

export default Authentication;
