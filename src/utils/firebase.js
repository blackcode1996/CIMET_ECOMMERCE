import {initializeApp} from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBnLnMaI4VAfIFDXT8XMl37NCh0J5dqIvE",
    authDomain: "cimet-ecommerce.firebaseapp.com",
    projectId: "cimet-ecommerce",
    storageBucket: "cimet-ecommerce.appspot.com",
    messagingSenderId: "964735347390",
    appId: "1:964735347390:web:1cf4fbab20e1320968ccef",
    databaseURL:"https//cimet-ecommerce-default-rtdb.firebaseio.com/",
    
  };

  export const app = initializeApp(firebaseConfig);
   
  const auth = getAuth(app)
  const db = getFirestore(app)

  export async function createUserByEmail(name, email, password) {
    try {
      const value = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(value.user, {
        displayName: name,
      })
      return { success: true, message: "Sign Up Successful" };
    } catch (err) {
      return { success: false, message: err.message };
    }
  }


  export async function loginUser(email, password) {
    try {
      const value = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('token', JSON.stringify(value.user.accessToken))
      return { success: true, message: "Log In Successful" };
    } catch (err) {
      return { success: false, message: err.message };
    }
  }


  export async function saveDataInFireBase(formData) {
    
    try{
     const docRef = await addDoc(collection(db, "contacts"), formData)
     console.log("Document written with ID: ", docRef.id);
       return{success: true, message:'Form Submitted Successfully'}
    }
    catch(err){
      console.error("Error adding document: ", err);
      return { success: false, message: "Error submitting form" };
    }
  }