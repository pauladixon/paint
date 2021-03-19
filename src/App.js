
import './App.css'
import Name from './components/Name'
import React, { useState, useEffect } from 'react'
import randomColor from 'random-color'

export default function App() {

  const [ count, setCount ] = useState(0)
  const [ color, setColor ] = useState(null)

  let random = randomColor()

  useEffect(() => {
    setColor(random.hexString())
  }, [count])

  return (
    <div 
      className="App"
      style={{borderTop: `10px solid ${color}`}}
    >
      <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
      {count}
      <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
      <Name/>
    </div>
  )
}
