import React, { Component } from 'react';
import { Router } from "@reach/router"

import SignUp from './pages/SignUp'

import './App.scss'


class App extends Component {
  render() {
    return (
      <Router>
        <SignUp path="/" />
      </Router>
    );
  }
}

export default App;
