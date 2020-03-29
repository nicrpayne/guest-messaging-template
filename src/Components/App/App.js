import React, {Component} from 'react';
import './App.css';
let Companies = require('../../Data/Companies');
let Guests = require('../../Data/Guests');
let Templates = require('../../Data/Templates');
// import StylingComponent from '../StylingComponent/StylingComponent'




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

  // componentDidMount() {
  //   this.props.dispatch({
  //     type: 'FETCH_COUNTIES'
  //   })
  // }

  // handleChangeFor = (event, propertyName) => {
  //   console.log('Setting state for: ', event.target.value, propertyName);
  //   this.setState({
  //     newMessage: {
  //       ...this.state.newMessage,
  //       [propertyName]: event.target.value
  //     }
  //   })
  //   console.log(this.state.newMessage)
  // }


  // handleClick = async (event) => {
  //   event.preventDefault()
  //   console.log(this.state.newEntry)
  //   try {
  //     await this.props.dispatch({
  //       type: 'POST_NEW_ORGANIZATION',
  //       payload: this.state.newEntry
  //     })
  //     alert('Organization added!')

  //     this.props.history.push('/organizationsListPage')
  //   } catch {
  //     console.log('dispatch error')
  //   }
  // }

  render () {
    
  return (
    <>
 
    <div className="App">
     <form>
        <div >
          <h1 className="app-heading">
              <p>Your</p>
              <p>Guest</p>
              <p>Messenger</p>
              {/* <p>{JSON.stringify(Companies[1].city)}</p> */}
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

export default App;
