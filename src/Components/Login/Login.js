import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const location = 
    const {signInWithGoogle,Logout} = useAuth()
    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(result=>{

        })
    }
    return (
        <div>

            <button onClick = {signInWithGoogle}>
                Sign in with Google
            </button>


            
        </div>
    );
};

export default Login;