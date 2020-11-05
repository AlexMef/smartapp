import { React, Component } from 'react';
import "../styles/ProductFeatures.scss";
import feature_icon from "../img/leaf.png";
import case_icon from "../img/case.png";

class ProductFeatures extends Component {
    constructor() {
        super()
        this.state = {
            showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        if (this.state.showMenu === false) {
            this.setState({
                showMenu: true,
            })
        } else {
            this.setState({
                showMenu: false,
            })
        }
    }

    render() {
        return (
            <div className="content-features">
                <div className="content-features-wrapper">
                    <div className="content-features-description">
                        <h1>Smart app amazing paragraph</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur quo unde itaque, laudantium maxime distinctio
                        officiis hic enim optio et temporibus culpa, delectus,
                    ut deserunt incidunt porro doloremque eius veniam?</p>
                    </div>
                    <div className="content-features-block">
                        <div className="content-features-block-menu">
                            <nav className="content-features-block-menu-item">
                                <img src={feature_icon} alt="" />
                                <button onClick={this.showMenu}><p>Heading title one</p></button>
                            </nav>
                            <nav className="content-features-block-menu-item">
                                <img src={feature_icon} alt="" />
                                <button onClick={this.showMenu}><p>Heading title one</p></button>
                            </nav>
                            <nav className="content-features-block-menu-item">
                                <img src={feature_icon} alt="" />
                                <button onClick={this.showMenu}><p>Heading title one</p></button>
                            </nav>
                            <nav className="content-features-block-menu-item">
                                <img src={feature_icon} alt="" />
                                <button onClick={this.showMenu}><p>Heading title one</p></button>
                            </nav>
                            <nav className="content-features-block-menu-item">
                                <img src={feature_icon} alt="" />
                                <button onClick={this.showMenu}><p>Heading title one</p></button>
                            </nav>
                        </div>
                        {
                            this.state.showMenu ? (
                                <div className="content-features-block-view">
                                    <img src={case_icon} alt="" />
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Aspernatur quo unde itaque, laudantium maxime distinctio
                                    officiis hic enim optio et temporibus culpa, delectus,
                                    ut deserunt incidunt porro doloremque eius veniam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Aspernatur quo unde itaque, laudantium maxime distinctio
                                    officiis hic enim optio et temporibus culpa, delectus,
                            ut deserunt incidunt porro doloremque eius veniam?</p>
                                </div>
                            ) : (null)
                        }
                    </div>
                </div>
            </div>
        )

    }
}

export default ProductFeatures;