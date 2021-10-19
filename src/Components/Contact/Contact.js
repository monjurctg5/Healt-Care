import React from 'react';
import './contact.css'
import ContactPart from './ContactPart/ContactPart';
let img = `https://images.theconversation.com/files/59470/original/bmc3zndq-1411073854.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop `

const Contact = () => {
    return (
      <div className = "pb-3">
        <div className = "">
          <img src="https://images.everydayhealth.com/images/doctors-for-alzheimers-healthcare-team-722x406.jpg?sfvrsn=7ee06af2_10" height="400px" width="100%"  alt="" />
        </div>
            <div className="bg-color bg  pt-5 pb-5 ">
              <ContactPart/>
              <div className="  text-content">
                <h1>Send  a Message</h1>
                <p>To askinng any question about Health Care You Can send  a message  or call us  or you contact us with live</p>
              </div>

            <div className = "container mt-5 pt-5">
            <div className = "">
               <div className="">
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