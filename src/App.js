import "./App.css";
import About from "./components/About/About";
// import Home from "./components/Home/Home";
// import Header from "./components/Header";
import { BrowserRouter, Route, Routes, Router, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./asserts/logoNew.png";
import Slider from "./components/Home/Slider";

function App() {
  return (
    <>
      <div>
        <div className="main_logo">
          <img src={logo} alt="Logo Here" className="logo" />
          <nav>
            <ul>
              <li>
                <Link to={"/slider"}> Home </Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
            </ul>
            <Outlet />
          </nav>
        </div>
        {/* <hr /> */}
        <Routes>
          <Route exact path="/slider" element={<Slider />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {/* 
      <div>
      <Slider></Slider>
      </div> */}
    </>
  );
}

export default App;
