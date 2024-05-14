import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="maindiv">
      <div className="main1">
        <h1>Contact</h1>
        <img src="https://downtowncoders.com/assets/images/logoNew.png"  style={{width:"250px"}}/>
        <p>
          {" "}
          Location : 301, tulsi niwas, badhe wasti, Mundhwa, Pune, Maharashtra
          411036
        </p>
        <p>Email : support@downtowncoders.com</p>
        <p>Phone : +91-7498242585</p>
        <p>View Location on Google Map</p>
      </div>

      <div className="main2">
        <p>
        
          <input type="text" placeholder="First name"   style={{height:'30px',borderRadius:'5px'}}  />
        
          <input type="text" placeholder="Last name" style={{height:'30px',borderRadius:'5px',marginLeft:"15px"}}/>
        </p>
        <p>
          <input type="text" placeholder="email"  style={{width:"100%",height:'30px',borderRadius:'5px'}}/>
        </p>
        <p>
     
          <input type="text" placeholder="Course Name" style={{height:'30px',borderRadius:'5px'}} />
       
          <input type="text" placeholder="Contact Number" style={{height:'30px',borderRadius:'5px',marginLeft:"15px"}} />
        </p>
        <p>
          <input type="text area" placeholder=" Message"  style={{width:"100%",height:'90px',textAlign:'top',borderRadius:'5px'}}/>
        </p>
        <p>
          <button style={{width:"150px",height:'40px',textAlign:'top',borderRadius:'50px',color:"white",backgroundColor:'orange',border:"0"}}>Send Message</button>
        </p>
      </div>
      <div className="div3"></div>
    </div>
  );
}

export default Contact;
