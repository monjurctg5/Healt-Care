import React from 'react';

const ContactPart = () => {
    return (
        <div className = "container text-white mt-5">
            <h1 className="text-center fs-1 fw-bold text-dark mt-5 mb-5">
                Contact Us
            </h1>
            <div className = "row row-cols-1 row-cols-md-2 g-4   ">
        <div  className="col  rounded ">
           <div className="custom-card">
           <div className="icon"><i className="fas fa-phone-square-alt"></i></div>
            <h2 className="subtitle">By Phone</h2>
            <p className="">
            <small>(Call us to knowing details)</small>
            <br/>
            Hot Line:<br/>
            1-877-930-7483
            <br/><br/>
            International:<br/>
            1-604-637-0780
            </p>
           </div>
            </div>

            <div  className="col rounded   ">
            <div className="custom-card  ">
            <div className="icon"><i className="fas fa-video"></i></div>
            <h2 className="subtitle">Live Chat</h2>
            <p className="desc">
            Chat with a member of our in-house team.
            </p>
            <div className="Button mx-auto mb-3 mt-5">
            <a href="javscript:void(0)" className="liveChatApp" title="Start Chat">Start Chat</a>
            </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default ContactPart;