import React from "react";
import bgImage from "../../asserts/6.top_learning_platform_courses_bg.jpg";
import { courseDetailsData } from "./Courses-details-data";
import "./Courses.css";
import { BiLock } from "react-icons/bi";

function Courses2() {
  return (
    <div>
      <div>
        <div className="cmain1">
          <img
            src={bgImage}
            style={{ width: "805px", opacity: "1.0", zIndex: "1" }}
          />
          <div className="centered">
            <h1>PROMOTIONAL OFFER!!!</h1>
            <p>
              10% Discount on joining DownTownCoders with 3 of your friends.
            </p>
          </div>
        </div>

        <div className="cmain2">
          <div className="cdiv1">
            <h1>Refer and Earn</h1>
            <p>Refer your friends and collegues to our program.</p>
            <p>Once they join you get the Joining Incentive*.</p>
          </div>
          <div className="cdiv2">
            <h1>Multiple Payment Plans</h1>
            <p>
              In DownTownCoders we ensure students are not burdened with fees
              pressure.
            </p>
            <p>
              So we provide very nominal charges for every course with multiple
              payment options.
            </p>
          </div>
          <div className="cdiv3">
            <h1>30 Days MoneyBack Guarantee</h1>
            <p>Not happy with US??</p>
            <p>Your hard earned money is returned back without any question.</p>
          </div>
        </div>
      </div>

      <div>
        <div className="divfinal">
          <h1>Detailed Curriculum</h1>
          <p>
            Understand the detailed structure of our course for each program.
          </p>
          <strong>Dont worry!!!</strong>

          <p>
            You will learn every details from scratch and will be an Expert
            after the end of the course.
          </p>
        </div>

        <div className="sylabusdiv">
          {courseDetailsData.map((item, index) => {
            return (
              <div key={index}>
               
                <img src={item.image}  style={{ width: "200px" }}  />
                <p>{item.spam}</p>
                <img src={item.sImage} style={{ width: "60px", borderRadius:"120px" }}/>
                <p>{item.name}</p>
                <p>{item.header}</p>
                <button style={{ backgroundColor:'orange', border:"none", color:"white" }}>SYLLABUS</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Courses2;
