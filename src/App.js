
import React, { Component } from 'react';
import API from './API'
import Nav from './Components/Nav'
import Store from './Containers/Store'
import SignUpContainer from './Containers/SignUpContainer'
import './App.css'

class App extends Component {

  state = {
    categories: null
  }


  componentDidMount() {
    API.getCategories()
    .then(resp => {
      this.setState({
        categories: resp
      })})
  }


  render() {
    return (
      <React.Fragment>
      <Nav />

      {true ? null : <SignUpContainer />}
      <Store categories={this.state.categories}/>

      </React.Fragment>
    );
  }
}

export default App
