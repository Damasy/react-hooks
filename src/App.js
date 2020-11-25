import React, { useState, useEffect, useRef, useCallback } from "react";
import Button from "./Button";
import { UseLayoutEffectEx } from "./UseLayoutEffectEx";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("");
  const amountRef = useRef();
  // const reachMaxRef = useRef(false);

  // const [listofCounts, setListofCounts] = useState([1]);
  const listofCounts = [1];

  const divRef = useRef();
  const [divData, setDivData] = useState({});

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

  useEffect(() => {
    setDivData(divRef.current.getBoundingClientRect());
  }, []);

  const handleAddBtns = () => {
    // setListofCounts(...listofCounts, 10)
    listofCounts.push(10);
  };

  return (
    <div ref={divRef} className="container text-center mt-5">
      <input ref={amountRef} />
      <div className="mt-3">{counter}</div>
      <Button
        onClick={handleAddBtns}
        key={listofCounts[listofCounts.length - 1]}
        label="Add Buttons"
      />
      <br />
      {listofCounts.map((count) => (
        <>
          <Button onClick={onClick} label={count} key={count} n={count} />
          <br />
        </>
      ))}
      <button className="btn btn-success mx-2 mt-3" onClick={changeTitle}>
        Change Title
      </button>
      {/* <pre className="text-left">{JSON.stringify(divData, null, 2)}</pre> */}
      <UseLayoutEffectEx />
    </div>
  );
}
