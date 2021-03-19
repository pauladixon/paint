
import './App.css'
import Name from './components/Name'
import React, { useState, useEffect } from 'react'

export default function App() {

  const [ count, setCount ] = useState(0)

  return (
    <div 
      className="App"
      style={{}}
    >
      {count}
      <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
      <button onClick={() => setCount(currentCount => currentCount - 1)}>+</button>
      <Name/>
    </div>
  )
}
