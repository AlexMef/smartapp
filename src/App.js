import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import './App.scss';

import slider_background from "./img/slider_background.png";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <div className="header-wrapper">
            <div className="header-leftbar">
              <div className="header-leftbar-sitetitle">
                <NavLink to="/">SmallApp</NavLink>
              </div>
              <nav className="header-leftbar-menu">
                <div className="header-leftbar-menu-item"><NavLink to="/">Home</NavLink></div>
                <div className="header-leftbar-menu-item"><NavLink to="/">Features</NavLink></div>
                <div className="header-leftbar-menu-item"><NavLink to="/">Screenshot</NavLink></div>
                <div className="header-leftbar-menu-item"><NavLink to="/">Gallery</NavLink></div>
                <div className="header-leftbar-menu-item"><NavLink to="/">About</NavLink></div>
              </nav>
            </div>
            <div className="header-rightbar">
              <div className="header-rightbar-email">
                {/* <img src="" alt="" /> */}
                <p>mysite@gmail.com</p></div>
              <div className="header-rightbar-phonenumber">
                {/* <img src="" alt="" /> */}
                <p>8-800-555-35-35</p>
              </div>
            </div>
          </div>
          <div className="content"></div>
          <footer className="footer"></footer>
        </header>
        <div className="content">
          <div className="content-slider">
            <img src={slider_background} alt="" />
            <div className="content-slider-container">
              <h1>Smart app landing</h1>
              <h2>Smart app landing description</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quo unde itaque, laudantium maxime distinctio
              officiis hic enim optio et temporibus culpa, delectus,
               ut deserunt incidunt porro doloremque eius veniam?</p>
              <button className="content-slider-container-download-button"><a href="#">Download</a></button>
            </div>

          </div>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
