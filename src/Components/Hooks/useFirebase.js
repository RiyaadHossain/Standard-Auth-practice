import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.init";

const auth = getAuth(app);

const useFirebase = () => {
    const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then((credential) => {
          const user = credential.user;
          console.log(user);
            setUser(user)
        })
        .catch((error) => {
          const errorMsg = error.message;
          console.log(errorMsg);
        });
  }

  return {user, googleSignIn};
};

export default useFirebase;
