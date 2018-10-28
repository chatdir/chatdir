import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import styles from './App.css'
import PhoneText from './img/phoneText.jpg'

class App extends Component {
  state = {}
  render() {
    return (
      <div className={styles.appClass}>
        <div className={styles.appClass}>Hello World!</div>
        <div className={styles.abc}>Hello World!</div>
        <div className={styles.abcd}>Hello World!</div>
        <div>
          <img src={PhoneText} alt="example chat on a phone" />
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
