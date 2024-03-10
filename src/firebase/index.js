// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAegBR8X9lq2s115Fnd1jM534Pz2LEbIkw",
  authDomain: "vue-shorth-aut.firebaseapp.com",
  projectId: "vue-shorth-aut",
  storageBucket: "vue-shorth-aut.appspot.com",
  messagingSenderId: "291749540669",
  appId: "1:291749540669:web:cc588ea602973593ef0b54",
  measurementId: "G-RGW6ED4QVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export { auth, createUserWithEmailAndPassword };