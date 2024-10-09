import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBnLnMaI4VAfIFDXT8XMl37NCh0J5dqIvE",
    authDomain: "cimet-ecommerce.firebaseapp.com",
    projectId: "cimet-ecommerce",
    storageBucket: "cimet-ecommerce.appspot.com",
    messagingSenderId: "964735347390",
    appId: "1:964735347390:web:1cf4fbab20e1320968ccef",
    databaseURL:"https//cimet-ecommerce-default-rtdb.firebaseio.com/",

  };

  export const app = initializeApp(firebaseConfig)