import React from 'react';
import { Link } from 'react-router-dom';
import Doctors from '../Doctors/Doctors';
import QuickLinks from '../QuickLinks/QuickLinks';
import Services from '../Services/Services';
import './home.css'
let banner = "https://previews.123rf.com/images/pitinan/pitinan1711/pitinan171100292/90593810-health-insurance-concept-doctor-in-hospital-with-health-insurance-related-icons-in-modern-graphic-in.jpg"
const Home = () => {

    
    return (
        <div className="">
             <img src={banner} alt=""  height="500px"  width="100%"/>
            <div>
                <QuickLinks></QuickLinks>
                
                <div className ="service-container">
                <h1 className = "pt-5 pb-3 ">Our Top <span className = "text-warning">Services</span></h1>
                <Services></Services>

                </div>
               <div className = "doctor-containe text-white pt-3 pb-3">
               <Doctors></Doctors>
               </div>
               
               <div className = "appointmentForm">
                   <h1>WANT TO SCHEDULE AN APPOINTMENT?</h1>
                   <p>Call us at (+02-334455071-6, 02-334451901-6 or fill in the appointment form...</p>
                  <Link to="/apointment">
                  <button className = "btn btn-info">Appointment Form</button>
                  </Link>
               </div>
            </div>
            <QuickLinks></QuickLinks>
        </div>
    );
};

export default Home;