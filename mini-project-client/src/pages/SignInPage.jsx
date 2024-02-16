import React from 'react'
import '../styles/signInPage.scss';
const SignInPage = () => {
  return (
    <div className='sign-in-page'>
      <div className="content-container">
        <div id='signInCol'>
          <h1>Sign In!</h1>
          <p>Please enter your details</p>
          <form action="/">
            <input type="text" name='firstName' id='firstName' placeholder='First Name' className='inputEl'/>
            <br></br>
            <input type="text" name='lastName' id='lastName' placeholder='Last Name' className='inputEl'/>
            <br />
            <input type="email" name='email' id='email' placeholder='Enter your E-Mail ID' className='inputEl'/>
            <br />
            <input type="password" name='password' id='password' placeholder='Password' className='inputEl'/>
            <br />
            <label htmlFor="designation">
              Select your job role: 
            </label>
            <br />
            <select name="designation" id="designation" className='inputEl'>
              <option value="CR">CR</option>
              <option value="Teacher">Teacher</option>
              <option value="Others">Others</option>
            </select>
            <br />
            <button id='signUpBtn'>
              Sign Up!
            </button>
          </form>
        </div>
        <div id='imageCol'>
        </div>
      </div>
    </div>
  )
}

export default SignInPage