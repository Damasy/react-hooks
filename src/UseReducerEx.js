import React, { useState, useReducer } from "react";
import Button from "./Button";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.payload };
    case DECREMENT:
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

const UseReducerEx = () => {
  // const [count, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <Button
        label="Increment"
        onClick={() =>
          dispatch({
            type: INCREMENT,
            payload: 2,
          })
        }
      />
      <h1>{state.count}</h1>
      <Button
        label="Decrement"
        onClick={() =>
          dispatch({
            type: DECREMENT,
            payload: 2,
          })
        }
      />
    </div>
  );
};

export default UseReducerEx;
