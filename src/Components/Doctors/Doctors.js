import React, { useEffect, useState } from 'react';
import "./doctors.css"
const Doctors = () => {
    const [doctors,setDoctors] = useState([])
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div className = "container ">
            <h3 className = "pb-2  text">Specialist <span className = "text-bold text-warning">Doctor</span> List</h3>
            <div className ="row cols-12 row-cols-sm-12 row-cols-md-3 g-4 ">
            {
                doctors.map(doctor=>(
                    <div className="col ">
                        <div className="card "  style={{width: "20rem"}}>
                            <img src={doctor.img}
                             className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{doctor.name}</h5>
                                <p className="card-text">{doctor.speacialist}</p>
                               
                            </div>
                            </div>
                    </div>
                ))
            }
            

            </div>
            
        </div>
    );
};

export default Doctors;