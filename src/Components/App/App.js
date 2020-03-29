import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
let Companies = require('../../Data/Companies');
let Guests = require('../../Data/Guests');
let Templates = require('../../Data/Templates');


class App extends Component {

  state = {
    newMessage: {
      setCompany: '',
      setGuest: '',
      setTemplateIndex: '',
      setMessage: '',
      setMessageList: ''
    }
  }
  // handleChangeFor = (event, propertyName) => {
  //   console.log('Setting state for:', event.target.value, propertyName);
  //   this.setState({
  //     newEntry: {
  //       ...this.state.newEntry,
  //       [propertyName]: event.target.value
  //     }
  //   })
  //   console.log(this.state.newEntry)
  // }

  handleClick = (event) => {
    // event.preventDefault()
    console.log('BROOOOOOOOOOOO selection clicked with id of: ', event)
    this.setState ({
      newMessage: {
        setCompany: event.target.value
      }
    })
    // this.props.dispatch({
    //   type: 'COMPANY_SELECTED',
    //   payload: event

    // })
  }

  render () {
    
  return (
    <>
      {JSON.stringify(this.props.reduxState)}
    <div className="App">
     <form>
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
                      return <li key={company.id} className="menu-item item--a">
                                <a href="#0" className="item--a"
                          onClick={(event) => this.handleClick(event)}>
                                  <span 
                                  >
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
                </li>
              </ol>
            </nav>
        </div>
      </form> 
    </div>
    <div>
        
    </div>
    </>
  );
}
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState
}

export default connect(mapReduxStateToProps)(App);
