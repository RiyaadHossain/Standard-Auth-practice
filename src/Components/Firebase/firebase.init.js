// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOyjA5ZsX9l7iAHknu7ny05pD9ftxO0oE",
  authDomain: "standard-auth-practice.firebaseapp.com",
  projectId: "standard-auth-practice",
  storageBucket: "standard-auth-practice.appspot.com",
  messagingSenderId: "847381155800",
  appId: "1:847381155800:web:4d293e4cfc2c1aaedfacad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;