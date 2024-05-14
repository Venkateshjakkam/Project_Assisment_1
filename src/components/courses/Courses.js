import React from "react";
import { courseData } from "./Courses-data";
import { courseSubData } from "./Courses-sub-data";
import "./Courses.css";
import sideCourse from "../../asserts/choose_bg_courses.png";
import Courses2 from "./Courses2";
import { useNavigate } from 'react-router-dom';

function Courses() {
  const navigate  = useNavigate();

  const handleErrorClick = () => {
    navigate('/error'); 
  };

  return (
    <div>
      <div>
        <div className="main_container">
          <div className="header-div">
            <h1 style={{ color: "#fff" }}>Featured Courses</h1>
            <p style={{ color: "#fff" }}>
              We provide end to end curriculum for all your technological needs
              in the modern day generation.
            </p>
          </div>
          <div className="course_main">
            {courseData.map((item, index) => {
              return (
                <div key={index} className="gdiv">
                  <div className="center_img">
                    <img
                      src={item.image}
                      alt="slide"
                      style={{ width: "100px" }}
                    />
                    <h1 style={{ color: "white" }}>{item.heading}</h1>
                  </div>
                  <h2
                    style={{
                      color: "blue",
                      fontSize: "16px",
                      marginLeft: "20px",
                    }}
                  >
                    {item.desc}
                  </h2>
                  <span>{item.span}</span>
                  <br></br>
                  <button
                    style={{ marginLeft: "60px", backgroundColor: "orange" }}
                    onClick={handleErrorClick}
                  >
                    View Details
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* **************************************  Courses split *****************************************/}

        <div className="secdiv">
          <div className="div1">
            <div>
              <h1>Why choose us?</h1>
              <pre>
                <p>
                  Years of experience in the Industrial Field has made us
                  realise we
                </p>
                <p>
                  have fewer quality wanna be professionals.Theoritical and
                  marks
                </p>
                <p> oriented approach has led to the downfall of knowledge </p>
                <p>development among youngstars.</p>
              </pre>
              <br></br>
              <p>
                In DownTownCoders we provide a curriculum which helps you to
              </p>
              <p>
                learn each technology with practical demonstration from Day 1.
              </p>
              <br></br>
              <p>
                Develop Out of the Box thinking with our program and we will
                make
              </p>
              <p>sure you reach the pinnacle of success.</p>
            </div>

            <div className="choose_main">
              {courseSubData.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="choose_img">
                      <img src={item.image} alt="slide" />

                      <h1>{item.heading}</h1>
                    </div>
                    <span>{item.span}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="div2">
            <img src={sideCourse} style={{ bottom: "0", height: "560px" }} />
          </div>
        </div>

        <div>
          <Courses2 />
        </div>
      </div>
    </div>
  );
}

export default Courses;
