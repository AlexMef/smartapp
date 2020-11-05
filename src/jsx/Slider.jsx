import { React, Component } from 'react';
import "../styles/Slider.scss";

import slider_background from "../img/slider_background.png";

class Slider extends Component {
    render () {
        return (
            <div className="content-slider-wrapper">
              <div className="content-slider">
                <img className="content-slider-image" src={slider_background} alt="" />
                <div className="content-slider-container">
                  <h1>Smart app landing</h1>
                  <h2>Smart app landing description</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur quo unde itaque, laudantium maxime distinctio
                  officiis hic enim optio et temporibus culpa, delectus,
               ut deserunt incidunt porro doloremque eius veniam?</p>
                  <button className="content-slider-container-download-button"><a href="https://genshin.gg">Download</a></button>
                </div>
              </div>
            </div>
        )
    }
}

export default Slider;