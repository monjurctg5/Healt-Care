import React from 'react';
import useAuth from '../../hooks/useAuth';

const ShowApoin = () => {
   
    const {patientInfo}= useAuth()
    return (
        <div>
            <h1>Well Come</h1>


            
        </div>
    );
};

export default ShowApoin;