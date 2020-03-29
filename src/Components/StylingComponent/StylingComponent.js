import React, { Component } from 'react';
import '../App/App.css';
// import '../../Data/Companies';
let Companies = require('../../Data/Companies');
let Guests = require('../../Data/Guests');
let Templates = require('../../Data/Templates');






class StylingComponent extends Component {

    render() {
        return(
            <>
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
                      
                        <li className="menu-item">
                            <a href="#0" className="widgets">
                                <i className="ion ion-ios-aperture-outline"></i>
                                <span>Hotel</span>
                                <div className="dots"></div>
                            </a>
                            <ol className="sub-menu">
                                {Companies.map((company) => {
                                    return <li key={company.id}
                                        className="menu-item item--a">
                                        <a href="#0" className="item--a"><span>{company.company}</span></a></li>

                                })}
                            </ol>
                        </li>
                        <li className="menu-item">
                            <a href="#0" className="kabobs">
                                <i className="ion ion-ios-bonfire-outline"></i>
                                <span>Guest</span>
                            </a>
                            <ol className="sub-menu">
                                {Guests.map((guest) => {
                                    return <li key={guest.id}
                                        className="menu-item item--a">
                                        <a href="#0" className="item--b"><span>{guest.firstName}</span></a></li>

                                })}
                            </ol>
                        </li>
                        <li className="menu-item">
                            <a href="#0" className="contact">
                                <i className="ion ion-ios-bonfire-outline"></i>
                                <span>Message</span>
                            </a>
                            <ol className="sub-menu">
                                {Templates.map((message) => {
                                    return <li key={message.id}
                                        className="menu-item item--a">
                                        <a href="#0" className="item--c"><span>{message.name}</span></a></li>

                                })}
                            </ol>
                            {/* <ol className="sub-menu">
                                <li className="menu-item"><a href="#0" className="item--a"><span>Third Step</span></a></li>
                                <li className="menu-item"><a href="#0" className="item--b"><span>BBQ kabobs</span></a></li>
                                <li className="menu-item"><a href="#0" className="item--c"><span>Summer kabobs</span></a></li>
                            </ol> */}
                        </li>
                   
                    </ol>
                </nav>

            </>
        );
    }
}


export default StylingComponent;


// {
//     Companies.map((company) => {
//         return {
//             name: company.company,
//             city: company.city,
//             timezone: company.timezone
//         }
//     })
// }