import React, { Component } from 'react'

import Nav from './Components/Nav'
import SignUpContainer from './Containers/SignUpContainer'

import './App.css'

class App extends Component {
  render () {
    return (
      <>
        <Nav />
        <SignUpContainer />
      </>
    )
  }
}

export default App
