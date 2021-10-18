import React from 'react';
import { Link } from 'react-router-dom';


const Service = ({service}) => {
    const {id,title,img,sortDes} = service
    return (
        <div>
            <div className="col">
            <div className="card text-center m-1" style={{width:"20rem"}}>
            <img src={img} className="card-img-top"height="300px" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{sortDes}.</p>
                <Link to={`/details/${id}`} className="btn btn-primary">Details</Link>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Service;