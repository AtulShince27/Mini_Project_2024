import { useState } from 'react'
import Navbar from './Navbar'
import HomePage from '../pages/HomePage'
import LandingPage from '../pages/LandingPage'
import SignInPage from '../pages/SignInPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <LandingPage></LandingPage>
      {/* <SignInPage></SignInPage> */}
      {/* <HomePage></HomePage> */}
    </div>
  )
}

export default App
