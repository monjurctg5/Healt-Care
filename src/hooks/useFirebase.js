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

initializeAuthentication()
const  auth = getAuth()
const googleProvider = new GoogleAuthProvider()
const useFirebase = ()=>{
    const [isLoading,setIsLoading] = useState(true)
    const [user,setUser] = useState({})
   
    const [fname,setFname] = useState("")
    const signInWithGoogle = ()=>{
        setIsLoading(true)
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
        }).finally(()=>{
            setIsLoading(false)
        })
    }
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
    const updateName = ()=>{
        
        updateProfile(auth.currentUser,{
            displayName:fname ,
            photoURL :"https://cdn1.vectorstock.com/i/1000x1000/19/45/user-avatar-icon-sign-symbol-vector-4001945.jpg"
        })

    }
    

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