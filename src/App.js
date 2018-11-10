
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import CategoriesContainer from './Containers/CategoriesContainer'
import ItemsContainer from './Containers/ItemsContainer'
import API from './API'
import Nav from './Components/Nav'
import Store from './Containers/Store'
import AuthorisationContainer from './Containers/AuthorisationContainer'

import './App.css'

class App extends Component {

  state = {
    currentUser: null
  }

  

  signInUser = (username, password) => {
    API.getStores()
      .then(resp => {
        this.setState({currentUser: resp.find(store => store.name === username && store.password === password )})
      })
  }

  isLoggedIn = (currentUser) => {
    if(currentUser){
      return <Store currentUser={this.state.currentUser} categories={this.state.categories}/>
    } else {
      return <AuthorisationContainer signInUser={this.signInUser} />
    }
  }

  signOutUser = () => 
    this.setState({currentUser: null})


  render() {
    return (
    <Router>
      <>
        <Route path='/' render={() => <Nav signOutUser={this.signOutUser} currentUser={this.state.currentUser}/> } />
        <Route path='/' render={() =>  this.isLoggedIn(this.state.currentUser) } />
      </>
    </Router>
    );
  }
}

export default App
