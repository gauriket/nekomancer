// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy61MhW1-UT0yE4kWy7QxkmWa-3m5-2L0",
  authDomain: "nekomancer-5fc6e.firebaseapp.com",
  projectId: "nekomancer-5fc6e",
  storageBucket: "nekomancer-5fc6e.appspot.com",
  messagingSenderId: "43797259464",
  appId: "1:43797259464:web:72a8170a85b036f70cb1fd",
  measurementId: "G-2MBESQG0HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);