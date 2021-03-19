
import './App.css'
import Name from './components/Name'
import React, { useState, useEffect } from 'react'
import randomColor from 'random-color'

export default function App() {

  let random = randomColor()

  const [ count, setCount ] = useState(0)
  const [ color, setColor ] = useState(null)
  useEffect(() => {
    setColor(random.hexString())
  })

  return (
    <div 
      className="App"
      style={{  borderTop: `10px solid ${color}`}}
    >
      <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
      {count}
      <button onClick={() => setCount(currentCount => currentCount - 1)}>+</button>
      <Name/>
    </div>
  )
}
