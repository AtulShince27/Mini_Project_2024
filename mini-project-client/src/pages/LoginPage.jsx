import React from 'react'
import './loginPage.scss';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { loginCredentials } from '../test/registered_users';
import { currentPage } from '../store/atoms/globalAtoms';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { RecoilRoot } from 'recoil';

const LoginPageContainer = () => {
  const navigate = useNavigate();
  // RegEX for Email 
  const emailRegex = /^(?:[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:\.[a-zA-Z0-9-])*|(?:[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:gmail|yahoo)\.com))$|^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@smit\.smu\.edu\.in)$/;
  // RegEx for Password
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  // States to check whether the valid Email ID and password are input
  const [invalidEmail, setErrorEmail] = useState(false);
  const [invalidPassword, setErrorPassword] = useState(false);
  // Set the current page to log in page
  // const setCurrPage = useSetRecoilState(currentPage);
  const [currPage, setCurrPage] = useRecoilState(currentPage);
  useEffect(()=>{
      setCurrPage("loginPage");
  }, []);
  console.log(currPage);
  // Verifies whether the user already exists or not
  const checkUserExistence = (emailId, password) => {
    const userDetails = {
      emailId,
      password,
    }

    const idx = loginCredentials.findIndex((user) => {
      console.log(user);
      return user.emailId === userDetails.emailId && user.password === userDetails.password;
    })

    if(idx === -1){
      return false;
    } else {
      let stringifiedObj = JSON.stringify(userDetails);
      sessionStorage.setItem("currentUser", stringifiedObj);
      return true;
    }
  }

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
      if(checkUserExistence(emailAddr.value, password.value)){
        alert("Successfully logged in as: " + emailAddr.value);
        navigate("/home");
      } else {
        alert("Incorrect Email ID or Password. Try Again!");
      }
    }
  }
  return (
    <div className= "login-page">
      <div className="main">
          <div className="content">
            <div className="heading">
              <h1>Welcome Back!</h1>
            </div>
            <div className="heading2">
              <h6>Please Login to your account</h6>
            </div>
            <form className='login-form' onSubmit={handleFormSubmit}>
              {/* Login Form that takes input EMail and Password */}
              <div>
                <input type="email" id="email" name="email" className={!invalidEmail ?"inputDiv": "inputDiv error"} placeholder='Enter Email ID'/>
                {/* If an Email of Invalid Format is entered it shows this Error Message */}
                {invalidEmail && <p id='errorMsg'>Invalid Email ID</p>}
              </div>
              <div>
                <input type="password" id="password" name="password" className={!invalidPassword ?'inputDiv': 'inputDiv error'} placeholder='Password'/>
                {/* If an Password of Invalid Format is entered it shows this Error Message */}
                {invalidPassword && <p id='errorMsg'>Invalid Password. Must contain atleast 1 uppercase, 1 lowercase , 1 number and 1 special character</p>}
              </div >
              {/* The Forgot Password on click sends a request to the Backend which sends an EMail to reset the credentials */}
              <div className='forgot'><a href="#">Forgot Password?</a></div>
              <div className='buttons'>
                <button type="submit" className='Btn' id="loginBtn">
                  Login
                </button>
              </div>
            </form>
        </div>
        <div className="image"> </div>
      </div>
    </div>
  )
}

const LoginPage = () => {
  return (
    <>
    <RecoilRoot>
      <LoginPageContainer></LoginPageContainer>
    </RecoilRoot>
    </>
  )
}

export default LoginPage