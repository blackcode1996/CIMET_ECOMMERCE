import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { app } from "../utils/firebase";
import { toast, ToastContainer } from "react-toastify";
import SignUpForm from "../components/SignUpForm";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/slice/authSlice";
import { useLocation, useNavigate } from "react-router-dom";


const auth = getAuth(app);

const Authentication = () => {

  const [showLogIn, setShowLogIn] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/profile';

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setShowLogIn(true)
      }
      else {
        console.log("SIGNED OUT")
        setShowLogIn(true)
      }
    })
  }, [])

  const dispatch = useDispatch()

  const [signInInfo, setSignInInfo] = useState({
    email: "",
    password: "",
  });

  const [verifyAuth, setVerifyAuth] = useState("signUp");

  const handleAuth = (value) => {
    const { name, email, password } = value;

    if (verifyAuth === "signUp") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((value) => {
          toast.success("Sign In Successful");
          updateProfile(value.user, {
            displayName: name,
          })
            .then(() => {
              setVerifyAuth('signIn')
            })
            .catch((err) => {
              console.log("Error setting displayName:", err);
            });
        })
        .catch((err) => {
          toast.error(err.message);
        });

    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((value) => {
          toast.success("Log In Successful", value);
          localStorage.setItem('token', JSON.stringify(value.user.accessToken))
          if (!value.user.displayName) {
            updateProfile(value.user, {
              displayName: name,
            })
              .catch((err) => {
                console.log("Error setting displayName on login:", err);
              });
          }
          // navigate('/profile')
          navigate(from, { replace: true })
        })
        .catch((err) => toast.error(err.message));
    }
  };


  return (
    <>
      {showLogIn && <>
        <ToastContainer />
        <SignUpForm
          handleAuth={handleAuth}
          verifyAuth={verifyAuth}
          signInInfo={signInInfo}
          setSignInInfo={setSignInInfo}
          setVerifyAuth={setVerifyAuth}
        />
      </>}
    </>
  );
};

export default Authentication;
