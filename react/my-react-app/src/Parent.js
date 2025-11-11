import React, {useState} from "react";
import Child from "./Child";
export default function Parent(){
    const [count,setCount]= useState(0); //0
    return <Child Counter={count} onIncrement = {() => setCount(count + 1)} onDecrement = {() => setCount(count - 1)}/>;
  }