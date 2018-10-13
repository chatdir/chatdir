import React, { Component } from 'react'
import './App.css'
import PhoneText from './img/phoneText.jpg'

class App extends Component {
  state = {}
  render() {
    return (
      <div className="AppClass">
        Hello, world!
        <div>
          <img src={PhoneText} alt="example chat on a phone" />
        </div>
      </div>
    )
  }
}

export default App
