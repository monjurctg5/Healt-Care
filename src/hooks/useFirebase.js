import { getAuth,
     signInWithPopup,
      GoogleAuthProvider,
      onAuthStateChanged ,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut
    } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebaseConfig/firebaseConfig";

initializeAuthentication()
const  auth = getAuth()
const googleProvider = new GoogleAuthProvider()
const useFirebase = ()=>{
    const [user,setUser] = useState({})
    const signInWithGoogle = ()=>{
       return  signInWithPopup(auth,googleProvider)
    }

    const register = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }
    const Logout =()=>{
        signOut(auth).then(()=>{
            setUser({})
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)

            }       
        })
    },[])

    return {
        user,
        signInWithGoogle,
        register,
        setUser,
        signIn,
        Logout,
    }
}


export default useFirebase