import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './apoint.css'
const ShowApoin = () => {
   
    const {patientInfo}= useAuth()
    return (
        <div className = "success">
            <i class="fas fa-check-circle icon"></i>
            <h1 className = "mt-3">Success</h1>

            <Link to ="/">
                <button className = "btn btn-info">Go Back Home</button>
            </Link>


            
        </div>
    );
};

export default ShowApoin;