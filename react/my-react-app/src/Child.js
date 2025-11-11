import React from "react";
export default function Child({Counter,onIncrement,onDecrement}){
    return <><h2>Count: {Counter}</h2> <button onClick = {onIncrement}>Increment</button> <button onClick = {onDecrement}>Decrement</button></>;
  }