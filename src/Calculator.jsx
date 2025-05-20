import React, { useState } from 'react'
import { evaluate } from 'mathjs' 



function Calculator() {
  const [display, setDisplay] = useState('')

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const result = evaluate(display) 
        setDisplay(result.toLocaleString())
      } catch {
        setDisplay('Error')
      }
    } else if (value === 'AC') {
      setDisplay('')
    } else if (value === 'C') {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay(display + value)
    }
  }

  const buttons = [
    'e','h','sin','^',
    'AC', 'C', '/', '*',
    '7', '8', '9', '-',
    '4', '5', '6', '+',
    '1', '2', '3', '=',
    '0', '.'
  ]

  return (
    <div className="calculator">
      <div className="display">{display || '0'}</div>
      <div className="buttons">
        {buttons.map((btn, i) => (
          <button key={i} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Calculator