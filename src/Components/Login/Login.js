import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const glogo = "https://thumbs.dreamstime.com/b/snapdeal-logo-189257116.jpg"

const Login = (props) => {
    const [email,setEmail] = useState()
    const [password ,setPassword] = useState()
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location?.state?.from || "/"
    const {signInWithGoogle,signIn,setUser,setIsLoading} = useAuth()
    const handleEmail = e=>{
        e.preventDefault()
        setEmail(e.target.value)
    }
    const handlePassword =e =>{
        e.preventDefault()
        setPassword(e.target.value)
    }
    const handleManulaySignIn = (e)=>{

        e.preventDefault()
        setIsLoading(false)
        signIn(email,password)
        .then(result=>{
            setUser(result.user)
            history.push(redirect_url)
        }).catch(error=>{
            alert(error.message)
        })

    }
    const handleGoogleSignIn = ()=>{
        setIsLoading(false)
        signInWithGoogle()
        .then(result=>{
            console.log(redirect_url)
            history.push(redirect_url)
        }).catch(error=>{
            alert(error.message)
        })
    }
    return (
        <div className="bg signIn">
            <div className = "main">
            <div className = "register">
                <h2 className= "text-white">Please Login</h2>
            <form action="" id="register" onSubmit={props.handleSubmit} >

                <input onBlur = {handleEmail} required type="email" name="email" id="email" placeholder = "Enter your Email" /> <br /><br />
         
                <input onBlur = {handlePassword} required  type="password" name="password" id="password" placeholder = "Enter your Password" /> <br /><br />
               {/* <NavLink to="/signup">New User?</NavLink> */}
              
                <input type="submit" value = "Submit" name="submit" id="submit" onClick = {handleManulaySignIn} /> 
                <br />
                <br />
                <p>New User?  <Link to="/register" className = "text-info">Signup</Link></p>
                <div>-----------or------------</div>
                <br />

                <button type="button" className="bg-white btn  p-2 fw-bold" onClick = {handleGoogleSignIn} ><img src={glogo} width="30px" height="30px" alt="" />Sign in With Google</button> <br /><br />
            </form>
            <div className = "error">
                    <p>{props.massage}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;