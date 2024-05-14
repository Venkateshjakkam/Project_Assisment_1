import React,{ useState } from "react";
import "./Achievements.css";



const content = [
  [
    "To be honest I had less confidence to make into the IT industry due to lack of technical skills.",
    "After the rigorous training I have understood its just hard work that can help you to get placed. So thankful to the entire team of DownTownCoders.",
    "Shekhar Sawant",
    "Software Developer, Angular"
  ],
  [
    "I can't thank them enough to make my dream to a reality.",
    "Will always be greatful for their hard work on me when I lost all hopes. Thank You.",
    "Akshay Hatkar",
    "Junior Software Developer, JavaScript"
  ],
  [
    "I have experienced a top notch quality learning at DownTownCoders.",
    "Exceptional professionals who have helped me till I made myself in the IT Industry.Thank You sooo much!!",
    "Pritilal Bisen",
    "Software Developer, Angular"
  ]
];

function Achievements() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <div className="maindiv">
      <div className="leftdiv">
        <img src="https://downtowncoders.com/assets/images/quota.png" />
        <h1>
          Success stories of <br></br>
          students who took <br></br>
          best from us
        </h1>
      </div>

      <div className="rightdiv">
        <div>
          <div id="tabs">
            <menu>
              <button
                className={activeContentIndex === 0 ? "active" : ""}
                onClick={() => setActiveContentIndex(0)}
              >
                <img src='https://downtowncoders.com/assets/images/author-5.jpg'  style={{borderRadius: '40px'}}/>
              </button>
              <button
                className={activeContentIndex === 1 ? "active" : ""}
                onClick={() => setActiveContentIndex(1)}
              >
                 <img src='https://downtowncoders.com/assets/images/author-4.jpg' style={{borderRadius: '40px'}}/>
              </button>
              <button
                className={activeContentIndex === 2 ? "active" : ""}
                onClick={() => setActiveContentIndex(2)}
              >
                 <img src='https://downtowncoders.com/assets/images/author-6.jpg' style={{borderRadius: '40px'}}/>
              </button>
            </menu>
            <div id="tab-content">
              <ul>
                {content[activeContentIndex].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
