import React from 'react'
import './LoginPage.scss'
import loginImage from '../assets/login_page_illustration.png'

const LoginPage = () => {
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
            <form className='login-form'>
              <div>
                <input type="text" id="username" name="username" className='inputDiv' placeholder='Username'/>
              </div>
              <div>
                <input type="password" id="password" name="password" className='inputDiv' placeholder='Password'/>
              </div >
              <div className='forgot'><a href="#">Forgot Password?</a></div>
              <div className='buttons'>
                <button type="submit" className='Btn' id="loginBtn">Login</button>
                <button className='Btn' id='signinBtn'>Signin</button>
              </div>
            </form>
        </div>
        <div class="image"> </div>
      </div>
    </div>
  )
}

export default LoginPage