import React from "react";
import "./About.css";
import side_img1 from "../../asserts/shape-1.png";
import side_img2 from "../../asserts/shape-2.png";
import side_img3 from "../../asserts/shape-3.png";
import sideL1 from "../../asserts/4.top_learning platform_(2).jpg";
import sideL2 from "../../asserts/5.top_learning_platform.jpg";
import sideL3 from "../../asserts/about-2.jpg";

function About() {
  return (
    <div>
      <div className="main_container2">
      <div>
        <img src={side_img1} alt="About_page" />
      </div>

      <div>
        <h1 className="main_text">We provide a dynamic 
        <br></br>learning platform</h1>
        <br></br>
        <pre>
          <p>After years of research and experience we have come up with a</p>
          <p>
            curriculum which will not only help you to build the foundation very
          </p>
          <p> strong but also give you a clear vision to your career.</p>
        </pre>
        <br></br>
        <pre>
          <p>
            Our main focus is to provide Quality education so that you can
            secure
          </p>
          <p>
            your job when you face your first interview. Best in class Academic
          </p>
          <p>
            Mentors are always beside you till you clear the first stepping
            stone.
          </p>
        </pre>

        <br></br>
        <br></br>
        <button className="modleButton">Contact Us</button>

        <div className="modelimg1">
          <img src={side_img2} alt="About_page1" />
        </div>

        <div className="modelimg2">
          <img src={side_img3} alt="About-page2" />
        </div>
      </div>
      </div>

      <div className="main-container">
        <div className="image_parent">
          <img src={sideL1} alt="About_pageSide1" className="image1" />
          <img src={sideL2} alt="About_pageSide2" className="image2" />
          <img src={sideL3} alt="About_pageSide3" className="image3" />
        </div>
      </div>
    </div>
  );
}

export default About;
