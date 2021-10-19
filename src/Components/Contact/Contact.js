import React from 'react';
import './contact.css'
import ContactPart from './ContactPart/ContactPart';
let img = `https://thamza.react.themesdesign.in/static/media/img-3.dc2e6497.png`

const Contact = () => {
    return (
      <div>
            <div className="bg-color  pt-5 pb-5 ">
              <ContactPart/>
              <div className="text-center text-white  w-50 mx-auto p-3 mt-5">
                <h1>Send  a Message</h1>
                <p>To askinng any question about Math point You Can send  a message  or call us  or you contact us with live</p>
              </div>

            <div className = "container mt-5 pt-5">
            <div className = "d-lg-flex ">
               <div className="col-lg-6  pt-5">
               <img src={img} alt="" />  
               </div> 
               <div className="bg">
        <div className = "main">
        <div className = "register">
            <h2>Please Contact</h2>
        <form action="" id="register" >
           
            <input type="text" name="fname" id="fname" placeholder = "Enter your  Name" /  > <br /><br />
         
            <input  required type="email" name="email" id="email" placeholder = "Enter your Email" /> <br /><br />
           
           
            <textarea placeholder = "write your message" name="" id="" cols="23" rows="5"></textarea>
        
            <input type="submit" value = "Send" name="submit" id="submit"  /> <br /><br />

        </form>
        
        </div>
    </div>
    </div>
               
            </div>
            </div>
        </div>
      </div>
    );
};

export default Contact;