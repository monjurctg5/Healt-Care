import { getAuth,
     signInWithPopup,
      GoogleAuthProvider,
      onAuthStateChanged ,
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
        Logout
    }


}

export default useFirebase