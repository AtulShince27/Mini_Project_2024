import React, { useState, useEffect } from 'react'
import '../styles/signInPage.scss';
import { useNavigate } from "react-router-dom";
import { loginCredentials } from '../test/registered_users';
import { currentPage } from '../store/atoms/globalAtoms';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { isUserSignedIn } from '../store/atoms/globalAtoms';
import { RecoilRoot } from 'recoil';


const SignInPageContainer = () => {
  const navigate = useNavigate();
  // RegEX for Email 
  const emailRegex = /^(?:[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:\.[a-zA-Z0-9-])*|(?:[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:gmail|yahoo)\.com))$|^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@smit\.smu\.edu\.in)$/;
  // RegEX for Password 
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  // States to check whether a valid Email ID and password are provided 
  const [invalidEmail, setErrorEmail] = useState(false);
  const [invalidPassword, setErrorPassword] = useState(false);
  // Set the current page to sign in page
  const [currPage, setCurrPage] = useRecoilState(currentPage);
  const currUsersVal = loginCredentials;
  // variables for inputs
  let emailId = "", password = "", firstName = "", lastName = "", jobRole = "";
  // Function to handle the submission in front-end
  const handleFormSubmit = async (event) => {
    // Prevents the default execution of form in Javascript
    event.preventDefault();
    emailId = document.getElementById('email').value;
    password = document.getElementById('password').value;
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    jobRole = document.getElementById("designation").value;
    // test validity
    const isValidPassword = passwordRegex.test(password);
    const isValidEmail = emailRegex.test(emailId);
    
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

      const existingUser = currUsersVal.find((user) => user.emailId === emailId);
      
      if (existingUser) {
        alert("This email address is already in use!");
        return; // Indicate failure or error
      }

      const currUser = {
        firstName,
        lastName,
        emailId,
        password,
        jobRole,
      }

      let stringifiedObj = JSON.stringify(currUser);
      sessionStorage.setItem("currentUser", stringifiedObj);

      alert(emailId+ " Successfully signed in!");
      navigate("/home");
    } 
  } 
  
  useEffect(()=>{
    setCurrPage("signInPage");
  }, [])
  console.log(currPage);

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
            <input type="email" name='email' className={!invalidEmail? "inputEl" : "inputEl error"} id='email' placeholder='Enter E-Mail ID'/>
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

const SignInPage = () => {
  return (
    <>
      <RecoilRoot>
        <SignInPageContainer></SignInPageContainer>
      </RecoilRoot>
    </>
  )
}

export default SignInPage