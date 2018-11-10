import React from 'react'

import SignUpForm from './SignUpForm'

const SignUp = props =>
  <div className='sign-up-container'>
    <h1>Sign up</h1>
    <SignUpForm error={props.error} handleSubmit={props.handleSubmit} />
  </div>

export default SignUp
