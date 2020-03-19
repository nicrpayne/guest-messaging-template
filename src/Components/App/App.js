import React, {Component} from 'react';
import './App.css';
import Companies from '../../Data/Companies';
import Guests from '../../Data/Guests'



class App extends Component() {

  // state = {
  //   newEntry: {
  //     name: '',
  //     logo: '',
  //     url: '',
  //     type: '',
  //     address_number: '',
  //     address_unit: '',
  //     address_street: '',
  //     city: '',
  //     state: '',
  //     county_id: '',
  //     zip: '',
  //     contact_name: '',
  //     title: '',
  //     phone_number: '',
  //     phone_number_type: '',
  //     email: '',
  //     notes: '',
  //     demographics_age_0_3: 0,
  //     demographics_age_4_7: 0,
  //     demographics_age_8_12: 0,
  //     demographics_age_13_18: 0,
  //     demographics_race_white: 0,
  //     demographics_race_black: 0,
  //     demographics_race_native: 0,
  //     demographics_race_asian: 0,
  //     demographics_race_pacific: 0,
  //     demographics_poverty: 0

  //   },
  // }
  // componentDidMount() {
  //   this.props.dispatch({
  //     type: 'FETCH_COUNTIES'
  //   })
  // }



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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div >
          <label for='firstDropdown'>Time Unit</label>
          <select 
          id='firstDropdown' 
          className='chart-select' 
          onChange={this.handleChangeFor} 
          style={{ width: '100px' }}>
            <option value=''>Year</option>
            <option value=''>Month</option>
          </select>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
