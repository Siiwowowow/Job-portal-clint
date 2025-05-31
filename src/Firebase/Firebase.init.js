// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOezHkXCLETno_NBYJz19EXYI02qvc4Ec",
  authDomain: "job-finder-auth-6110c.firebaseapp.com",
  projectId: "job-finder-auth-6110c",
  storageBucket: "job-finder-auth-6110c.firebasestorage.app",
  messagingSenderId: "556666434669",
  appId: "1:556666434669:web:65757f04e8af085b727b64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);