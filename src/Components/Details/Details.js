import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./details.css"
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
        <div className ="container details  pb-5 pt-5">
             <div className="row row-cols-md-2">
                <div className="col mt-5 pt-5">
                    <h4>{Details?.title}</h4>
                    <h6 className = "text-danger">{Details?.sortDes}</h6>
                    <p>{Details?.description}</p>
                    <Link to = "/apointment">
                    <button  className="btn btn-danger"> Apoint Now</button>
                    </Link>
     
                </div>
                <div className="col">
                     <img src={Details?.img} width="100%"  alt="" />
                </div>
                </div>        
        </div>
    );
};

export default Details;