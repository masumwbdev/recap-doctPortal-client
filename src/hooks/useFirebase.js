import initializeAuthentication from "../Pages/Login/Firebase/firebase.init"
import { getAuth, signInWithPopup,createUserWithEmailAndPassword, GoogleAuthProvider,onAuthStateChanged, signOut } from "firebase/auth";
import {useState, useEffect} from 'react'

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth();

    // email password authentication
    const registerUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }

    // google authentication
    const googleAuth = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
          });
          return () => unsubscribe;
    }, [])

    // log out 
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    return {
        user,
        registerUser,
        googleAuth,
        logOut
    }
}
export default useFirebase;