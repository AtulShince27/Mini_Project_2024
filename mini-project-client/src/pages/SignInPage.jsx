import React, { useState } from 'react'
import '../styles/signInPage.scss';
import { Navigate, useNavigate } from "react-router-dom";
const SignInPage = () => {
  const navigate = useNavigate();
  // RegEX for Email 
  const emailRegex = /^(?:[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:\.[a-zA-Z0-9-])*|(?:[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:gmail|yahoo)\.com))$|^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@smit\.smu\.edu\.in)$/;
  // RegEX for Password 
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  // States to check whether a valid Email ID and password are provided 
  const [invalidEmail, setErrorEmail] = useState(false);
  const [invalidPassword, setErrorPassword] = useState(false);
  // Function to handle the submission in front-end
  const handleFormSubmit = (event) => {
    // Prevents the default execution of form in Javascript
    event.preventDefault();
    const emailAddr = document.getElementById('email');
    const password = document.getElementById('password');
    
    const isValidPassword = passwordRegex.test(password.value);
    const isValidEmail = emailRegex.test(emailAddr.value);

    if(!isValidPassword){
      console.log("Invalid Password");
      // Invalid password hence the state is set to true
      setErrorPassword(true);
    }
    if(!isValidEmail){
      console.log("Invalid Email ID");
      // Invalid Email ID hence the state is set to true
      setErrorEmail(true);
    }
    if(isValidPassword && isValidEmail){
      setErrorEmail(false);
      setErrorPassword(false);
      navigate("/home");
    }
  }
  return (
    <div className='sign-in-page'>
      <div className="content-container">
        <div id='signInCol'>
          <h1>Sign In!</h1>
          <p>Please enter your details</p>
          <form onSubmit={handleFormSubmit}>
            {/* Form for the SignIn Page that takes the First and Last Name of the user, designation , EMail ID and Password */}
            <input type="text" name='firstName' id='firstName' placeholder='First Name' className='inputEl'/>
            <br></br>
            <input type="text" name='lastName' id='lastName' placeholder='Last Name' className='inputEl'/>
            <br />
            <input type="email" name='email' className={!invalidEmail? "inputEl" : "inputEl error"} id='email' placeholder='Enter your E-Mail ID'/>
            {invalidEmail && <p id='errorMsg'>Invalid Email ID</p>}
            <br />
            <input type="password" name='password' id='password' placeholder='Password' className={!invalidPassword? "inputEl" : "inputEl error"}/>
            {invalidPassword && <p id='errorMsg'>Invalid Password. Must contain atleast 1 uppercase, 1 lowercase , 1 number and 1 special character</p>}
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
            <div id='routeContainer'>
              <a id='loginRouteBtn' onClick={()=>{
                console.log("Clicked!!")
                navigate("/loginPage");
              }}>
                Already have an account?
                {/* This allows the user to redirect to the login page if he/she already has an account */}
              </a>
            </div>
            <br />
            <button id='signUpBtn' type='submit'>
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