//import all important method from firebase

import { getAuth,
     signInWithPopup,
      GoogleAuthProvider,
      onAuthStateChanged ,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
      updateProfile
    } from "firebase/auth";

import { useEffect, useState } from "react";
import initializeAuthentication from "../firebaseConfig/firebaseConfig";
 
//firebase initialize
initializeAuthentication()
const  auth = getAuth()
const googleProvider = new GoogleAuthProvider()
const useFirebase = ()=>{
    const [isLoading,setIsLoading] = useState(true)
    const [user,setUser] = useState({})
   
    const [fname,setFname] = useState("")
    //for google signin
    const signInWithGoogle = ()=>{
        setIsLoading(true)
       return  signInWithPopup(auth,googleProvider)
    }

    //for manulay register

    const register = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
       
    }

   
    //manulay sign in
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }
    // to logout
    const Logout =()=>{
        signOut(auth).then(()=>{
            setUser({})
        }).finally(()=>{
            setIsLoading(false)
        })
    }
    //when user state change
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return ()=> unsubscribe
    },[])
    //to update user info
    const updateName = ()=>{
        
        updateProfile(auth.currentUser,{
            displayName:fname ,
            photoURL :"https://cdn1.vectorstock.com/i/1000x1000/19/45/user-avatar-icon-sign-symbol-vector-4001945.jpg"
        })

    }
    
//return all needed method to user some where
    return {
        user,
        signInWithGoogle,
        register,
        setUser,
        signIn,
        Logout,
        updateName,
        setFname,
        setIsLoading,
        isLoading
       
    }
}





export default useFirebase