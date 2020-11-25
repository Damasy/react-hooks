import React, { useState } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0);

  // method - must bind this context inside constructor to solve this context issue
  function countUp() {
    setCounter(counter + 1)
  }

  
  return (
    <div className="container text-center mt-5">
      <button className="btn btn-primary" onClick={countUp}>Count Up</button>
      <div className="mt-3">{counter}</div>
    </div>
  )
}
