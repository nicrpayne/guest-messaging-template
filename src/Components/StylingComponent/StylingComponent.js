import React, { Component } from 'react';
import '../App/App.css';
import '../../Data/Companies';
import CompanyList from '../CompanyList/CompanyList';




class StylingComonent extends Component {

    render() {
        return(
            <>
            <CompanyList/>
            {/* <img 
            className="logo"
            src="../../../public/Assets/logo.png" 
            alt="Your Guest Messenger Logo"/> */}
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            
                <nav className="menu">
                    <ol>
                        <li className="menu-item">
                            <a href="#0" className="home">
                                <i className="ion ion-md-home"></i>
                                <span>Clear</span>
                            </a>
                        </li>
                        {/* <li className="menu-item">
                            <a href="#0" className="about">
                                <i className="ion ion-ios-hand-outline"></i>
                                <span>About</span>
                            </a>
                        </li> */}
                        <li className="menu-item">
                            <a href="#0" className="widgets">
                                <i className="ion ion-ios-aperture-outline"></i>
                                <span>Company</span>
                                <div className="dots"></div>
                            </a>
                            <ol className="sub-menu">
                                <li className="menu-item item--a"><a href="#0" className="item--a"><span>FIRST STEP</span></a></li>
                                <li className="menu-item item--b"><a href="#0" className="item--b"><span>{Companies[0].company}</span></a></li>
                                <li className="menu-item item--b"><a href="#0" className="item--c"><span>Huge Widgets</span></a></li>
                            </ol>
                        </li>
                        <li className="menu-item">
                            <a href="#0" className="kabobs">
                                <i className="ion ion-ios-bonfire-outline"></i>
                                <span>Guest</span>
                            </a>
                            <ol className="sub-menu">
                                <li className="menu-item"><a href="#0" className="item--a"><span>Second Step</span></a></li>
                                <li className="menu-item"><a href="#0" className="item--b"><span>BBQ kabobs</span></a></li>
                                <li className="menu-item"><a href="#0" className="item--c"><span>Summer kabobs</span></a></li>
                            </ol>
                        </li>
                        <li className="menu-item">
                            <a href="#0" className="contact">
                                <i className="ion ion-ios-bonfire-outline"></i>
                                <span>Message</span>
                            </a>
                            <ol className="sub-menu">
                                <li className="menu-item"><a href="#0" className="item--a"><span>Third Step</span></a></li>
                                <li className="menu-item"><a href="#0" className="item--b"><span>BBQ kabobs</span></a></li>
                                <li className="menu-item"><a href="#0" className="item--c"><span>Summer kabobs</span></a></li>
                            </ol>
                        </li>
                        {/* <li className="menu-item">
                            <a href="#0" className="contact">
                                <i className="ion ion-ios-mail-outline"></i>
                                <span>Contact</span>
                            </a>
                        </li> */}
                    </ol>
                </nav>

            </>
        );
    }
}


export default StylingComonent;