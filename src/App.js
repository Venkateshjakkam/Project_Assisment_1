import "./App.css";
import About from "./components/About/About";
// import Home from "./components/Home/Home";
// import Header from "./components/Header";
import { BrowserRouter, Route, Routes, Router, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./asserts/logoNew.png";
import Slider from "./components/Home/Slider";
import Courses from "./components/courses/Courses";
import { useState } from "react";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contacts/Contact";
import Payments from "./components/payments/Payments";
import { ModalProvider } from "./components/Model/ModalContext";
import Model from "./components/Model/Model";
import Error from "./components/Error/Error";

function App() {
  const [aboutClick, setAboutClick] = useState(false);
  localStorage.setItem('clickAbout',false);
  const scrollAbout = () =>{
    // setAboutClick(true);
    console.log('slider  is working')
    localStorage.setItem('clickAbout',true);

  }


  return (
    <>
     <div>
   
      
        <div className="main_logo">
          <img src={logo} alt="Logo Here" className="logo" />
          <nav>
            <ul>
              <li>
                <Link to={"/"}> Home </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to={"/courses"}>Courses</Link>
              </li>
              <li>
                <Link to={"/Achievements"}>Achievements</Link>
              </li>
              <li>
                <Link to={"/Contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/Payments"}>Payments</Link>
              </li>
             
            </ul>
            <Outlet />
          </nav>
        </div>
        {/* <hr /> */}
        

        <Routes>
          <Route exact path="/" element={<Slider />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/Achievements" element={<Achievements />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Payments" element={<Payments />} />
          <Route path="/error" element={<Error />} />
        </Routes>
<Model></Model>
       
      </div>

    
    </>
  );
}

export default App;
