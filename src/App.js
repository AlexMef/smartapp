import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import './App.scss';


import ProductFeatures from './jsx/ProductFeatures';
import ProductFeature from './jsx/ProductFeature';
import Slider from './jsx/Slider';
import Posts from './jsx/Posts';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
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
                  <a href="mailto:mysite@gmail.com">mysite@gmail.com</a>
                </div>
                <div className="header-rightbar-phonenumber">
                  {/* <img src="" alt="" /> */}
                  <p>8-800-555-35-35</p>
                </div>
              </div>
            </div>
          </header>
          <div className="content">
            <Slider/>
            <ProductFeatures/>
            <ProductFeature/>
            <Posts/>
          </div>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
