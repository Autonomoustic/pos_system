import React from 'react'

import { Route, Redirect } from 'react-router-dom'

import SignUp from '../Components/SignUp'
import SignIn from '../Components/SignIn'

import API from '../API'

class SignUpContainer extends React.Component {
  state = {
    username: '',
    password: '',
    error: null
  }


  signUpNewUser = event => {
    event.preventDefault()
    const newUser = {
      name: event.target.uname.value,
      store_type: event.target.storeType.value,
      password: event.target.psw.value
    }
    API.postNewUser(newUser)
      .then(this.validateSignUp)
  }

  validateSignUp = (resp) => {
    if (resp.error) {
      this.setState({error: resp.error})
    } else {
      this.setState({username: resp.name, password: resp.password})
      this.props.signInUser(resp.name, resp.password)
    }
  }

  signInExistingUser = event => {
    event.preventDefault()
    this.setState({username: event.target.uname.value, password: event.target.psw.value})
    this.props.signInUser(event.target.uname.value, event.target.psw.value)
    this.props.history.push('/')
  }

  render () {

    return (
      <>
      <Route exact path='/' render={() => <SignUp error={this.state.error} handleSubmit={this.signUpNewUser}/> }/>
      <Route exact path='/signin' render={() => <SignIn signInExistingUser={this.signInExistingUser}/>}/>
      </>
    )
  }
}

export default SignUpContainer
