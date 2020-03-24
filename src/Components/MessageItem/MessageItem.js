import React, { Component } from 'react';
import App from '../App/App';
import Guests from '../../Data/Guests';
import Companies from '../../Data/Companies';
import '../App/App.css';


class MessageItem extends Component {

    render() {
        return(
            <>
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
                                <li className="menu-item item--a"><a href="#0" className="item--a"><span>First Step</span></a></li>
                                <li className="menu-item item--b"><a href="#0" className="item--b"><span>Bigger Widgets</span></a></li>
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


export default MessageItem;