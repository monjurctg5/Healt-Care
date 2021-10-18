import React from 'react';
import { Link } from 'react-router-dom';
let icon = "https://cdn.iconscout.com/icon/premium/png-256-thumb/technical-support-service-1-911162.png"

const QuickLinks = () => {
    return (
        <div className =" ">
            <div className="row row-cols-sm-8 row-cols-md-4 row-cols-lg-5 g-3 bg-success  p-2">
                <div className="col   p-4  text-white">
                    <div className = "d-flex flex-column justify-content-center align-items-center ">
                    <i class="fas fa-user-md  fs-2 fw-bold"></i>
                    <h6 className = "mt-4">Find Consultabt</h6>
                    </div>
                </div>

                <div className="col   p-4  text-white">
                    <div className = "d-flex flex-column justify-content-center align-items-center ">

                   <Link to="" className = "text-white">
                   <i className="far fa-edit fs-2 fw-bold"></i>
                    <h6 className = "mt-4">Online Report</h6>
                   </Link>
                    </div>
                </div>

                <div className="col   p-4  text-white">
                    <div className = "d-flex flex-column justify-content-center align-items-center ">
                 <Link to="/" className = "text-white">
                    <i className="fas fa-blender-phone fs-2 fw-bold"></i>
                    <h6 className = "mt-4">Request An Appiontment</h6>
                 </Link>
                    </div>
                </div>

                <div className="col   p-4  text-white">
                    <div className = "d-flex flex-column justify-content-center align-items-center ">
                   <Link to="/services" className ="text-white">
                   <i class="fas fa-headset fw-bold fs-2"></i>
                    <h6 className = "mt-4">All Service</h6>
                   </Link>
                    </div>
                </div>

                <div className="col   p-4  text-white">
                    <div className = "d-flex flex-column justify-content-center align-items-center ">
                    <i className="fas fa-user-md  fs-2 fw-bold"></i>
                    <h6 className = "mt-4">Find Consultabt</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickLinks;