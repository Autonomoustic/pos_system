import React from 'react'

const SignUpForm = props =>
  <div>
    <form onSubmit={event => props.handleSubmit(event)} className='formContainer'>
      <label className='sign-up' htmlFor='uname'><b>Store Name</b></label>
      <input className='sign-up' type='text' placeholder='Enter Store Name' name='uname' required />

      <label className='sign-up' htmlFor='storeType'><b>Store Type</b></label>
      <select defaultValue='' className='sign-up' type='dropdown' name='storeType' required>
        <option value='' disabled >Select your store type</option>
        <option value='convenience store'>convenience store</option>
        <option value='restaurant'>Restaurant</option>
        <option value='cafe'>Cafe</option>
        <option value='bar'>Bar</option>
        <option value='shisha Launge'>Shisha Launge</option>
      </select>

      <label className='sign-up' htmlFor='psw'><b>Password</b></label>
      <input className='sign-up' type='password' placeholder='Enter Password' name='psw' required />

      <button type='submit'>Sign Up</button>
    </form>
    <p>{props.error}</p>
  </div>

export default SignUpForm
