import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from '../Nav'
import Home from '../Home'
import Chat from '../Chat'
import Settings from '../Settings'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/chat" component={Chat} />
            <Route path="/settings" component={Settings} />
            <Route component={Home} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default hot(module)(App)
