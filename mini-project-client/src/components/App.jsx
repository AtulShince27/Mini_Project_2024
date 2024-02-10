import { useState } from 'react'
import '../styles/App.scss'
import Navbar from './Navbar'
import HomePage from '../pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
        <Navbar />
        <HomePage />
    </div>
  )
}

export default App
