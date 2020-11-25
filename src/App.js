import React, { useState, useEffect } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState('');

  // method - must bind this context inside constructor to solve this context issue
  function countUp() {
    setCounter(counter + 1)
  }

  function changeTitle() {
    setTitle('Welcome to React Hooks')
  }

  useEffect(() => {
    console.log('inside useEffect 1')
    document.title = title;

    // clear function
    return () => {
      console.log('clear')
    }
  }, [title])

  useEffect(() => {
    console.log('inside useEffect 2')
    document.title = `You clicked ${counter} times`;
  }, [counter])
  
  return (
    <div className="container text-center mt-5">
      <button className="btn btn-primary" onClick={countUp}>Count Up</button>
      <button className="btn btn-success" onClick={changeTitle}>Change Title</button>
      <div className="mt-3">{counter}</div>
    </div>
  )
}
