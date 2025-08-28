import { useState } from 'react'
import CoDuckLogo from './assets/coduck-logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img
          src={CoDuckLogo}
          className="logo react"
          alt="React logo"
          style={{ width: '200px', height: '200px' }}
        />
      </div>
      <h1>Welcome to CoDuck!</h1>
      <p>Begin your first course to start editing your site.</p>
      <p className="read-the-docs">
        Click the little duck in the bottom right corner to access your AI help assistant!
      </p>
    </>
  )
}

export default App
