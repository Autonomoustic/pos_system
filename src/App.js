
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
    currentUser: null
  }


  componentDidMount() {
    API.getCategories()
    .then(resp => {
      this.setState({
        categories: resp
      })})
  }

  signInExistingUser = (event) => {
    event.preventDefault()
    API.getStores(event)
      .then(obj => {
        console.log(obj.resp)
        let stores = obj.resp.PromiseValue
        console.log(stores)
        return this.signInUser(obj.resp.find(store => {
        if (store.name === obj.event.target.uname.value && store.password === obj.event.target.psw.value){
          return
        } else {
          console.log('not found')
        }
      }))})
  }

  signInUser = (user) => {
    this.setState({currentUser: user})
  }


  render() {
    return (
      <React.Fragment>

        <Router>
          <>
            <Route path='/' render={Nav} />

            <Route path='/signin' render={() => <SignIn submitHandler={this.signInExistingUser} />}/>

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
