import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AppointMents = () => {
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [Age,setAge] = useState("")
    const [address,setAddress] = useState("")
    const [ email,setEmail] = useState(" ")
    const [ phone,setPhone] = useState(" ")
    const {setPatientInfo} = useAuth()
    const history = useHistory();

    const  handleFirstName = e=>{
        e.preventDefault()
        setFname(e.target.value)
    }
    const handleLastNamee = e=>{
        e.preventDefault()
        setLname(e.target.value)

    }
    const handleEmail = e=>{
        setEmail(e.target.value)

    }
    const handleAge =e =>{
        setAge(e.target.value)
    }
    const handlephone  =e =>{
        setPhone(e.target.value)
    }
    const handleAddress = e=>{
        setAddress(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
       
        history.push('/showAppoint');

    }
    return (
        <div>
                <div className="bg">
        <div className = "main">
        <div className = "register">
            <h2>Please Write Your information</h2>
        <form action="" id="register" onSubmit={handleSubmit} >
           
            <input onBlur = {handleFirstName} type="text" name="fname" id="fname" placeholder = "Enter your First Name" /  > <br /><br />
            <input onBlur = {handleLastNamee} type="text" name="fname" id="fname" placeholder = "Enter your Last Name" /  > <br /><br />
            
            <input onBlur = {handleEmail} required type="email" name="email" id="email" placeholder = "Enter your Email" /> <br /><br />
           
            <input onBlur = {handleAge} required  type="number" name="password" id="password" placeholder = "Enter your Age" /> <br /><br />
            <input onBlur = {handlephone} required  type="number" name="password" id="password" placeholder = "Enter your Phone Number" /> <br /><br />
            <input onBlur = {handleAddress} required  type="text" name="text" id="text" placeholder = "Enter your Address" /> <br /><br />
        
            <input type="submit" value = "Submit" name="submit" id="submit" onClick = {handleSubmit} /> <br /><br />
        </form>
     
        </div>
    </div>
    </div>
            
        </div>
    );
};

export default AppointMents;