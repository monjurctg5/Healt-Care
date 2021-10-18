import React from 'react';
import {Link} from "react-router-dom"
let logo = "https://www.almightycs.com/acs_webiste_extension/static/src/images/hms/appointment.png"
const Header = () => {
    return (
        <div>
              <nav className="navbar shadow  navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link className="navbar-brand" to="/"><img src={logo} width="50px" height="50px" alt="" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link " to="/register">Registration</Link>
                </li>
                
                <li className="nav-item">
                <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        
            </div>
        </div>
        </nav>
        </div>
    );
};

export default Header;