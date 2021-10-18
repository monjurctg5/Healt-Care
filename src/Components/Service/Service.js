import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id,title,img,sortDes} = service
    return (
        <div>
            <div className="col">
            <div class="card text-center m-1" style={{width:"20rem"}}>
            <img src={img}class="card-img-top"height="300px"

             alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{sortDes}.</p>
                <Link to={`/details/${id}`} class="btn btn-primary">Details</Link>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Service;