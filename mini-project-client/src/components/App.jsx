import { useState } from 'react'
import '../styles/App.scss'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
        <Navbar />
    </div>
  )
}

export default App
