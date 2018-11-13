
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import CategoriesContainer from './Containers/CategoriesContainer'
import ItemsContainer from './Containers/ItemsContainer'
import API from './API'
import Nav from './Components/Nav'
import Store from './Containers/Store'
import AdminPage from './Containers/AdminPage'
import AuthorisationContainer from './Containers/AuthorisationContainer'

import './App.css'

class App extends Component {

  state = {
    currentUser: null
  }


  componentDidMount () {
    this.getCurrentUser()
  }

  getCurrentUser = () => {
    API.getStores()
      .then(resp => {
        this.setState({currentUser: resp.find(store => store.name === localStorage.username && store.password === localStorage.password )})
      })
  }

  signInUser = (username, password) => {
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
    this.getCurrentUser()
  }

  isLoggedIn = (currentUser, props) => {
    
    if(currentUser){
      return <Store currentUser={this.state.currentUser} categories={this.state.categories}/>
    } else {
      return <AuthorisationContainer {...props} currentUser={this.state.currentUser} signInUser={this.signInUser} />
    }
  }

  signOutUser = () =>{
    this.setState({currentUser: null})
    localStorage.clear()
  }

  render() {
    return (
      <Router>
        <>
          <Route path='/' render={() => <Nav signOutUser={this.signOutUser} currentUser={this.state.currentUser}/> } />

          <Route exact path='/adminpage' render={() => <AdminPage currentUser={this.state.currentUser}/>} />

          <Route path='/' render={(props) =>  this.isLoggedIn(this.state.currentUser, props) } />
        </>
      </Router>
    );
  }
}

export default App
