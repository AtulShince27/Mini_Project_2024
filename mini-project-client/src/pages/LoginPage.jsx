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
  // RegEX for phone 
  const phoneRegex = /^(0|\+91)?[6789]\d{9}$/;
  // RegEx for Password
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  // States to check whether the valid phone ID and password are input
  const [invalidPhone, setErrorPhone] = useState(false);
  const [invalidPassword, setErrorPassword] = useState(false);
  // Set the current page to log in page
  // const setCurrPage = useSetRecoilState(currentPage);
  const [currPage, setCurrPage] = useRecoilState(currentPage);
  useEffect(()=>{
      setCurrPage("loginPage");
  }, []);
  console.log(currPage);
  // Verifies whether the user already exists or not
  const checkUserExistence = (phoneNum, password) => {
    const userDetails = {
      phoneNum,
      password,
    }

    const idx = loginCredentials.findIndex((user) => {
      console.log(user);
      return user.phoneNum === userDetails.phoneNum && user.password === userDetails.password;
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
    const phoneNum = document.getElementById('phoneNum');
    const password = document.getElementById('password');
    
    const isValidPassword = passwordRegex.test(password.value);
    const isValidPhone = phoneRegex.test(phoneNum.value);

    if(!isValidPassword){
      console.log("Invalid Password");
      // Invalid password hence the state is set to true
      setErrorPassword(true);
    }
    if(!isValidPhone){
      console.log("Invalid Phone Number");
      // Invalid Phone Number hence the state is set to true
      setErrorPhone(true);
    }
    if(isValidPassword && isValidPhone){
      setErrorPhone(false);
      setErrorPassword(false);
      if(checkUserExistence(phoneNum.value, password.value)){
        alert("Successfully logged in as: " + phoneNum.value);
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
                <input type="text" id="phoneNum" name="phoneNum" className={!invalidPhone ?"inputDiv": "inputDiv error"} placeholder='Enter Phone Number'/>
                {/* If an Email of Invalid Format is entered it shows this Error Message */}
                {invalidPhone && <p id='errorMsg'>Invalid Phone Number</p>}
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