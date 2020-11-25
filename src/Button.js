import React, { useRef, memo } from 'react'

const Button = (props) => {
  const renderRef = useRef(0);
  console.log(renderRef.current++)
  return (
  <button className="btn btn-primary mx-2 mt-3" onClick={() => props.onClick(props.n)}>{props.label}</button>
  )
}

export default memo(Button)