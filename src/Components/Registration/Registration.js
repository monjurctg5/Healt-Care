import React, { useState } from 'react';
import { getAuth, updateProfile } from "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './reg.css'
const glogo = "https://thumbs.dreamstime.com/b/snapdeal-logo-189257116.jpg"


// Registration page 
const Registration = (props) => {
    const {register,setUser,setFname,signInWithGoogle,updateName} = useAuth()
 //Register information
    const [email,setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const location = useLocation()
    const history = useHistory()

    const redirect_url = location?.state?.from || "/"
 
    const  handleFirstName = e=>{
        e.preventDefault()
        setFname(e.target.value)
    }

    const handleEmail = e=>{
        setEmail(e.target.value)

    }
    const handlePassword =e =>{
        setPassword(e.target.value)
    }
    const handleSigninWithGoogle = ()=>{
        signInWithGoogle()
        .then(res=>{
            setUser(res.user)
            history.push(redirect_url)
        }).catch(error=>{
            alert(error.message)
        })
    }
    //manulay submit
    const handleSubmit = (e)=>{
        e.preventDefault()
        register(email,password)
        .then(res=>{
            alert("You Are Successfully Registerd \n Please Login ")
            history.push("/login") 
            setUser({})
            updateName()
        }).catch(error=>{
            alert(error.message)
        })
    }
    
    return (
        <div className="bg">
        <div className = "main">
        <div className = "register">
            <h2>Please Register</h2>
        <form action="" id="register" onSubmit={handleSubmit} >
           
            <input onBlur = {handleFirstName} type="text" name="fname" id="fname" placeholder = "Enter your First Name" /  > <br /><br />
            <input  type="text" name="fname" id="lname" placeholder = "Enter your Last Name" /> <br /><br />
          
            <input onBlur = {handleEmail} required type="email" name="email" id="email" placeholder = "Enter your Email" /> <br /><br />
           
            <input onBlur = {handlePassword} required  type="password" name="password" id="password" placeholder = "Enter your Password" /> <br /><br />
        
            <input type="submit" value = "Submit" name="submit" id="submit" onSubmit = {handleSubmit} /> <br /><br />

            <p>Have an account?   <Link to="/login" className ="text-info">Sign in</Link></p>
            <div>-----------------OR------------------</div>
            <button type="button" className="bg-white btn  p-2 fw-bold" onClick = {handleSigninWithGoogle} ><img src={glogo} width="30px" height="30px" alt="" />Sign in With Google</button> <br /><br />
        </form>
        <div className = "error">
                <p>{props.massage}</p>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Registration;