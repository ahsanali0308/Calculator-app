import React, { useState } from 'react'
import Calculator from './Calculator'
import { MdToggleOn } from "react-icons/md";
import { MdToggleOff } from "react-icons/md";


function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`app ${theme}`}>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === 'light'? <MdToggleOff size={50}/>:<MdToggleOn size={50}/>}
      </button>
      <Calculator />
    </div>
  )
}

export default App