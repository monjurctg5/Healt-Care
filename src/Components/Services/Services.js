import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        const url = './data.json'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setServices(data))

    },[])
    return (
        <div className="container">
            <div className="row row-cols-sm-12 row-cols-md-2 row-cols-lg-3     g-4">
                {
                    services.map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>

            
        </div>
    );
};

export default Services;