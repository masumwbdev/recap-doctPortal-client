import initializeAuthentication from "../Pages/Login/Firebase/firebase.init"
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState, useEffect } from 'react'

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('')

  const auth = getAuth();

  // create register email password authentication
  const registerUser = (email, password) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setAuthError('');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  }

  // loging email pass auth
  const loginAuth = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setAuthError('')
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  // google authentication
  const googleAuth = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setAuthError('');
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        setAuthError(error.message);
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      })
      .finally(() => setIsLoading(false));;
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
    });
    return () => unsubscribe;
  }, [])

  // log out 
  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
      .finally(() => setIsLoading(false));
  }

  return {
    user,
    loginAuth,
    registerUser,
    googleAuth,
    isLoading,
    authError,
    logOut
  }
}
export default useFirebase;