import React, { useState } from "react";
// import useFirebase from "../Hooks/useFirebase";
import { BsGoogle } from 'react-icons/bs';
import './LogIn.css'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.init";

const LogIn = () => {
    const auth = getAuth(app);
    const [user, setUser] = useState({})
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn2 = () => {
        signInWithPopup(auth, googleProvider)
        .then((credential) => {
          const user = credential.user;
            setUser(user)
        })
        .catch((error) => {
          const errorMsg = error.message;
          console.log(errorMsg);
        });
        console.log(user);
  }
  return (
    <div className="loginPage">
      <div className="login">
        <div className="form">
          <form className="login-form">
            <span className="material-icons">Log In</span>
           
            <button onClick={googleSignIn2} className='flex justify-center items-center'><BsGoogle className="mr-2"/> login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
