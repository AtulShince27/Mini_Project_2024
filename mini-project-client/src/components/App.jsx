import { useState } from 'react'
import viteLogo from '/vite.svg'
import '../styles/App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1 className="text-3xl font-bold">
          Hello world!
          <p>
            Welcome to Mini Project 2024
          </p>
        </h1>
    </div>
  )
}

export default App
