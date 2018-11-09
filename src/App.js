
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import CategoriesContainer from './Containers/CategoriesContainer'
import ItemsContainer from './Containers/ItemsContainer'
import API from './API'
import Nav from './Components/Nav'
import SignUpContainer from './Containers/SignUpContainer'
import SignIn from './Components/SignIn'

import './App.css'

class App extends Component {

  state = {
    categories: null,
    currentUser: undefined
  }


  componentDidMount() {
    API.getCategories()
    .then(resp => {
      this.setState({
        categories: resp
      })})
  }

  signInUser = (user) => {
    this.setState({currentUser: user})
    console.log(this.state.currentUser)
  }


  render() {
    return (
      <React.Fragment>

        <Router>
          <>
            <Route path='/' render={Nav} />

            <Route path='/signin' render={SignIn}/>

          <Route
          exact path='/'
          render={() =>
            this.state.currentUser ?
              null
                :
              <SignUpContainer signInUser={this.signInUser}/>
            }
            />
          </>
        </Router>

        {/*
          <p> Welcome to the POS system! </p>
          <CategoriesContainer categories={this.state.categories} />
        */}
      </React.Fragment>
    );
  }
}

export default App
