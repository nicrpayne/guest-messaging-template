import React, { Component } from 'react';
import '../App/App.css';
// import '../../Data/Companies';
let Companies = require('../../Data/Companies');






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
                                <span>Company</span>
                                <div className="dots"></div>
                            </a>
                            <ol className="sub-menu">
                            
                                
                                <li className="menu-item item--a"><a href="#0" className="item--a"><span>FIRST STEP</span></a></li>
                                <li className="menu-item item--b"><a href="#0" className="item--b"><span>{JSON.stringify(Companies[0].city)}</span></a></li>
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
                                <li className="menu-item"><a href="#0" className="item--b"><span></span></a></li>
                                <li className="menu-item"><a href="#0" className="item--c"><span>Summer kabobs</span></a></li>
                                {/* <li> <a> <span></span> </a> </li> */}
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