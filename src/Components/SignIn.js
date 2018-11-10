import React from 'react'

import SignInForm from './SignInForm'

const SignIn = props =>
  <div className='sign-up-container'>
    <h1>Sign In</h1>
    <SignInForm submitHandler={props.submitHandler} />
  </div>

export default SignIn
