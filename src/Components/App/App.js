import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css'; 
let Companies = require('../../Data/Companies');
let Guests = require('../../Data/Guests');
let Templates = require('../../Data/Templates');


class App extends Component {



  render () {
    
    // function findTime() {
    //   let time = new Date().getHours();
    //   if (time < 12) {
    //     return 'Good morning';
    //   } else if (time < 16) {
    //     return 'Good afternoon';
    //   } else {
    //     return 'Good evening';
    //   }
    // }

  return (
    <>
    <div className="App">
     {/* <form> */}
        <div >
          <h1 className="app-heading">
              <p>Your</p>
              <p>Guest</p>
              <p>Messenger</p>
          </h1>
          
          <div className="logo-div">
            <img
              className="logo"
              src="logo.png"
              alt="Your Guest Messenger Logo" />
            </div>
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
                      // console.log('in map', company);
                      return <li key={company.id} className="menu-item item--a">
                        <a href="#0" className="item--a"  
                          onClick={() => { console.log('reduxState:', this.props.reduxState)
                            this.props.dispatch({ type: 'COMPANY_SELECTED', payload: company.id })}}>
                                  <span >
                                    {company.company}
                                  </span>
                                </a>
                              </li>
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
                      return <li key={guest.id} className="menu-item item--a">
                        <a href="#0" className="item--b"
                          onClick={() => this.props.dispatch({ type: 'GUEST_SELECTED', payload: guest.id })}>
                            <span>
                              {guest.firstName}
                            </span>
                          </a>
                        </li>
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
                      return <li key={message.id} className="menu-item item--a">
                        <a href="#0" className="item--c"
                          onClick={() => this.props.dispatch({ type: 'TEMPLATE_SELECTED', payload: message.id })}>
                            <span>
                              {message.name}
                            </span>
                        </a>
                      </li>
                    })}
                  </ol>
                </li>
              </ol>
            </nav>
        </div>
      {/* </form>  */}
    </div>
    <div className="message-box-div">
        <h1 className="message-box-heading">Your Message</h1>
        <textarea 
        rows="6"
        cols="60"
        type="text"
        className="message-box"
        value={JSON.stringify(this.props.reduxState.displaySelectedReducer)}
        placeholder="your message will appear here">
        
        {/* <p>test</p> */}
        </textarea>
    </div>
    </>
  );
}
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapReduxStateToProps)(App);
