import React, { useState, useEffect, useRef, useCallback } from "react";
import Button from "./Button";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("");
  const amountRef = useRef();
  // const reachMaxRef = useRef(false);

  const listofCounts = [1, 10, 20, 40, 50];

  // method - must bind this context inside constructor to solve this context issue
  // function countUp() {
  //   if (!reachMaxRef.current) {
  //     if (counter >= 10) {
  //       reachMaxRef.current = true;
  //     } else {
  //       setCounter((c) => c + (+amountRef.current.value || 1));
  //     }
  //   } else console.log("You have reached max clicks");
  // }

  function changeTitle() {
    setTitle("Welcome to React Hooks");
  }

  useEffect(() => {
    // console.log('inside useEffect 1')
    document.title = title;

    // clear function
    return () => {
      console.log("clear");
    };
  }, [title]);

  useEffect(() => {
    // console.log('inside useEffect 2')
    document.title = `You clicked ${counter} times`;
  }, [counter]);

  useEffect(() => {
    amountRef.current.focus();
  });

  const onClick = useCallback((n) => setCounter((c) => c + n), [setCounter]);

  return (
    <div className="container text-center mt-5">
      <input ref={amountRef} />
      <div className="mt-3">{counter}</div>
      {listofCounts.map((count) => (
        <Button countUp={onClick} label={count} key={count} n={count} />
      ))}
      <button className="btn btn-success mx-2 mt-3" onClick={changeTitle}>
        Change Title
      </button>
    </div>
  );
}
