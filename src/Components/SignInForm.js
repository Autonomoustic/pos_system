import React from 'react'

const SignInForm = props =>
  <div>
    <form onSubmit={event => props.submitHandler(event)} className='formContainer'>
      <label className='sign-up' htmlFor='uname'><b>Store Name</b></label>
      <input className='sign-up' type='text' placeholder='Enter Store Name' name='uname' required />

      <label className='sign-up' htmlFor='psw'><b>Password</b></label>
      <input className='sign-up' type='password' placeholder='Enter Password' name='psw' required />

      <button type='submit'>Sign In</button>
    </form>
  </div>

export default SignInForm
