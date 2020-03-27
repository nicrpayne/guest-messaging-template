import React, {Component} from 'react';
import './App.css';
import StylingComponent from '../StylingComponent/StylingComponent'
import CompanyList from '../CompanyList/CompanyList'
import Companies from '../../Data/Companies';



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
            <StylingComponent />
            {/* <span className={this.props.classes.dropdown}>County:  </span>
            <FormControl >
            <Select>
              className={this.props.classes.dropdownItem}
              native className={this.props.classes.dropdownItem}
              onChange={(event) => this.handlChangeFor(event, 'company')}>
              {Companies.map(taco =>
                <option  className={this.props.classes.dropdownMenu}> {taco.company} </option>
              )}
            </Select>
            </FormControl> */}

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
