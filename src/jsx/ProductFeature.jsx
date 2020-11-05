import { React, Component } from 'react';

import '../styles/ProductFeature.scss';
import mobile from '../img/mobile.png';

class ProductFeature extends Component {
    render() {
        return (
            <div className="content-feature">
                <div className="content-feature-wrapper">
                    <div className="content-feature-leftbar">
                        <h1>A very nice feature name</h1>
                        <h2>A very nice feature description</h2>
                        <p>Some nice text about feature and it's benefits to other products
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam inventore amet, dolor cum vel doloremque quam non
                        minima maxime itaque ut error velit voluptatem quas a
                        perspiciatis, odio soluta? Ut? Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Expedita necessitatibus
                        asperiores quasi cupiditate rem quis velit, molestias,
                        rerum corrupti blanditiis doloremque laboriosam beatae
                        ipsam provident maiores aperiam molestiae tenetur neque.
                        </p>
                        <button className="content-feature-leftbar-seemore-button">
                            <a href="https://genshin.gg">See more</a>
                        </button>
                    </div>
                    <div className="content-feature-rightbar">
                        <img src={mobile} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductFeature;