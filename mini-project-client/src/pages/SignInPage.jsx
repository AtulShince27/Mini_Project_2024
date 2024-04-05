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
  const phoneRegex = /^(0|\+91)?[6789]\d{9}$/;
  // RegEX for Password 
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  // States to check whether a valid Phone number and password are provided 
  const [invalidPhone, setErrorPhone] = useState(false);
  const [invalidPassword, setErrorPassword] = useState(false);
  // Set the current page to sign in page
  const [currPage, setCurrPage] = useRecoilState(currentPage);
  const currUsersVal = loginCredentials;
  // variables for inputs
  let phoneNum = "", password = "", fullName = "", regdNo = "", jobRole = "";
  // Function to handle the submission in front-end
  const handleFormSubmit = async (event) => {
    // Prevents the default execution of form in Javascript
    event.preventDefault();
    phoneNum = document.getElementById('phoneNum').value;
    password = document.getElementById('password').value;
    fullName = document.getElementById("fullName").value;
    regdNo = document.getElementById("regdNo").value;
    jobRole = document.getElementById("designation").value;
    // test validity
    const isValidPassword = passwordRegex.test(password);
    const isValidPhone = phoneRegex.test(phoneNum);
    
    if(!isValidPassword){
      console.log("Invalid Password");
      // Invalid password hence the state is set to true
      setErrorPassword(true);
    }
    if(!isValidPhone){
      console.log("Invalid Phone Number");
      // Invalid Phone number hence the state is set to true
      setErrorPhone(true);
    }
    if(isValidPassword && isValidPhone){
      setErrorPhone(false);
      setErrorPassword(false);

      const existingUser = currUsersVal.find((user) => user.phoneNum === phoneNum);
      
      if (existingUser) {
        alert("This phone number is already in use!");
        return; // Indicate failure or error
      }

      const currUser = {
        fullName,
        regdNo,
        phoneNum,
        password,
        jobRole,
      }

      let stringifiedObj = JSON.stringify(currUser);
      sessionStorage.setItem("currentUser", stringifiedObj);

      alert(phoneNum+ " Successfully signed in!");
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
            <input type="text" name='fullName' id='fullName' placeholder='Full Name' className='inputEl'/>
            <br></br>
            <input type="text" name='regdNo' id='regdNo' placeholder='Registration Number' className='inputEl'/>
            <br />
            <input type="text" name='phoneNum' className={!invalidPhone? "inputEl" : "inputEl error"} id='phoneNum' placeholder='Enter Phone Number'/>
            {invalidPhone && <p id='errorMsg'>Invalid Phone Number</p>}
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