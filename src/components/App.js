import React, { Component } from 'react'

import './App.css'
import MainNav from './MainNav'
import LandingJumbotron from './LandingJumbotron'

class App extends Component {
  constructor() {
    super()
    this.state = {
      locationInStorage: false,
      searchbarValue: ''
    }
  }

  searchLocation = () => {

    this._clearInputValue()
  }

  updateSearchBarValue = (locationValue) => {
    this.setState({ searchbarValue: locationValue })
  }


  _clearInputValue() {
    this.setState({ searchbarValue: '' })
  }

  render() {
    return (
      <div className="App">
        <MainNav
          searchbarValue={ this.state.searchbarValue }
          handleChange={ this.updateSearchBarValue }
          handleSubmit={ this.searchLocation }
        />
        { this.state.locationInStorage ? null :<LandingJumbotron /> }
      </div>
    );
  }
}

export default App;
