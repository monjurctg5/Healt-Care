import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const Details = () => {
    const [serviceDetails,setServiceDetails] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        let url = '/data.json'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setServiceDetails(data))
    },[])
    const Details=serviceDetails?.find(details=>details?.id==id)
    console.log(Details);
    return (
        <div>
             <div className="row row-cols-md-2">
                <div className="col">
                    <h4>{Details?.title}</h4>
                </div>
                <div className="col">
                     <img src={Details?.img} width="100%"  alt="" />
                </div>
                </div>        
        </div>
    );
};

export default Details;