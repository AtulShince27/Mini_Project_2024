import UserGroups from '../pages/UserGroups'
import HomePage from '../pages/HomePage'
import LandingPage from '../pages/LandingPage'
import SignInPage from '../pages/SignInPage'
import LoginPage from "../pages/LoginPage" 
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <div className='app'>
      <>
        <BrowserRouter>
        {/* The Router is an React Router DOM module that allows us to perform routing in the Application */}
        <Routes>
          {/* Each Route has a specified path and the element that should be loaded when the route is called. */}
          <Route path="/home" element={<HomePage/>}></Route>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/signinPage" element={<SignInPage/>}></Route>
          <Route path="/loginPage" element={<LoginPage/>}></Route>
          <Route path="/usersPage" element={<UserGroups/>}></Route>
        </Routes>
        </BrowserRouter>
      </>
    </div>
  )
}

export default App
