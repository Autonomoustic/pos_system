import React from 'react'

import SignUp from '../Components/SignUp'

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
      this.props.signInUser(resp)
    }
  }

  render () {
    return (
      <SignUp error={this.state.error} handleSubmit={this.signUpNewUser}/>
    )
  }
}

export default SignUpContainer
