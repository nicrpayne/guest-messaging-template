import React, { Component } from 'react';
import App from '../App/App';
import Guests from '../../Data/Guests';
import Companies from '../../Data/Companies';
import '../App/App.css';


class MessageItem extends Component {

    render() {
        return(
            <>
                <nav class="menu">
                    <ol>
                        <li class="menu-item">
                            <a href="#0" class="home">
                                <i class="ion ion-md-home"></i>
                                <span>Home</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="#0" class="about">
                                <i class="ion ion-ios-hand-outline"></i>
                                <span>About</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="#0" class="widgets">
                                <i class="ion ion-ios-aperture-outline"></i>
                                <span>Widgets</span>
                                <div class="dots"></div>
                            </a>
                            <ol class="sub-menu">
                                <li class="menu-item item--a"><a href="#0" class="item--a"><span>Big Widgets</span></a></li>
                                <li class="menu-item item--b"><a href="#0" class="item--b"><span>Bigger Widgets</span></a></li>
                                <li class="menu-item item--b"><a href="#0" class="item--c"><span>Huge Widgets</span></a></li>
                            </ol>
                        </li>
                        <li class="menu-item">
                            <a href="#0" class="kabobs">
                                <i class="ion ion-ios-bonfire-outline"></i>
                                <span>Kabobs</span>
                            </a>
                            <ol class="sub-menu">
                                <li class="menu-item"><a href="#0" class="item--a"><span>Shishkabobs</span></a></li>
                                <li class="menu-item"><a href="#0" class="item--b"><span>BBQ kabobs</span></a></li>
                                <li class="menu-item"><a href="#0" class="item--c"><span>Summer kabobs</span></a></li>
                            </ol>
                        </li>
                        <li class="menu-item">
                            <a href="#0" class="contact">
                                <i class="ion ion-ios-mail-outline"></i>
                                <span>Contact</span>
                            </a>
                        </li>
                    </ol>
                </nav>

            </>
        );
    }
}


export default MessageItem;