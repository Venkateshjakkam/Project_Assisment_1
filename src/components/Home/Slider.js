import { useState, useEffect,useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./Slider-data";
import icon_1 from "../../asserts/f-icon-1.png";
import icon_2 from "../../asserts/f-icon-2.png";
import icon_3 from "../../asserts/f-icon-3.png";
import About from "../About/About.js";
import Model from "../Model/Model.js";
import "./Slider.css";
import '../Model/Model.css';


const Slider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  
 

  const openModal = () => {
    setIsModalOpen(true);
    console.log("Iclicked model")
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div>
      <div className="slider">
      
        <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
        <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
        {sliderData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                  <img src={slide.image} alt="slide" className="image" />
                  <div className="content">
                    <h2>{slide.heading}</h2>
                    <p>{slide.desc}</p>
                    {/* <hr /> */}
                    <button className="btn" onClick={openModal}>Book Free Demo</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Model isOpen={isModalOpen} onClose={closeModal} ></Model>

      <div className="programs">
        <div className="program1">
          <img src={icon_1} alt="program outcome 1" />
          <h4>
            <a href="javascript:;">Best Academic Mentors</a>
          </h4>
          <p>
            Our top notch academic mentors will help you to understand each
            topic conceptually till your sattisfaction.
          </p>
        </div>

        <div className="program2">
          <img src={icon_2} alt="program outcome 2" />
          <h4>
            <a href="javascript:;">Industrial Experience</a>
          </h4>
          <p>
            Working on Live Projects gives you the best industrial exposure and
            helps you to polish your technical abilities.
          </p>
        </div>

        <div className="program3">
          <img src={icon_3} alt="program outcome 3" />
          <h4>
            <a href="javascript:;">Global Recognition</a>
          </h4>
          <p>
            An amalgamation of knowledge and experience will help you earn your
            dream job.
          </p>
        </div>
      </div>
      <div id="about-page" >
      
        <About />
      </div>
    </div>
  );
};

export default Slider;
