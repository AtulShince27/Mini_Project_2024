import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.scss';
import LoginPage from './pages/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LoginPage />
    </div>
  )
}

export default App
