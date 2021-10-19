import React from 'react';
import {Link} from "react-router-dom"
import useAuth from '../../hooks/useAuth';
let logo = "https://www.almightycs.com/acs_webiste_extension/static/src/images/hms/appointment.png"
const Header = () => {
    const {user,Logout} = useAuth()
   
    return (
            <div>
              <nav className="navbar shadow  navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
            <Link className="navbar-brand" to="/"><img src={logo} width="50px" height="50px" alt="" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/services">All Services</Link>
                        </li>
                            <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/doctors">Doctors</Link>
                        </li>
                      
                    {
                        //if user  login 
                     user?.email?
                    <>
                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/login" onClick = {Logout}>LogOut</Link>
                                        </li>
                                        <li className = "nav-item">
                                            <span className = "nav-link text-info">{user?.displayName}</span>
                                        </li>
                                        <li className = "nav-item">
                                            <span className = "nav-link"><img src={user?.photoURL} className = "rounded-pill" width = "30px" alt="" /></span>
                                        </li>      
                    </>    
                    :
                        // when user not login
                    <>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                        </li>
                        <li className="">
                        <Link className="nav-link active " to="/register">Registration</Link>
                        </li>
                        
                    </>
                    }


              
                
            </ul>
        
            </div>
        </div>
        </nav>
        </div>
    );
};

export default Header;