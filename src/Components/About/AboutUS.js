import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './about.css'



const AboutUS = () => {
  const [doctors,setDoctors] = useState([])
  useEffect(()=>{
    fetch(`/doctors.json`)
    .then(res=>res.json())
    .then(data=>setDoctors(data))

  })

    return (
        <div>
              <div className="about-section">
                   <div className = "w-50 mx-auto">
                   <h1>About  <span className = "text-warning">Health</span> <span className="text-info">Care</span></h1>
                    <p>Healt Care is created to helping poor peaople of bangladesh </p>
                    <p>We our provided all catagoires doctor and medicale service  with resonable  price  and the doctor of helth care  are very good   and also good person  </p>
                   </div>
                    </div>


                    <div className = "doctor-containe">
                    <h2  >Our <span className = "text-info"> <br/>  Speacilist</span></h2>
                        <div className="row">
                          {
                            doctors.map(doctor=>(
                              <div className="column">
                            <div className="card">
                              <img src={doctor?.img} alt="monjur" height = "300px" style={{width:"100%"}}/>
                              <div className="container">
                                <h2>{doctor?.name}</h2>
                                <p className = "title">He is exaprt {doctor?.speacialist}s</p>
                                <p>monjur@gmaiol.com</p>
                                <p><button className="button">Contact</button></p>
                              </div>
                            </div>
                          </div>

                            ))
                          }
                        </div>
                    </div>
        </div>
    );
};

export default AboutUS;