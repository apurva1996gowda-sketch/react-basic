import React from 'react'
import { useState } from 'react'
import UseCallbackchild from './UseCallbackchild'
import { useCallback } from 'react'
import { use } from 'react'

const UseCallbackparent = () => {
    const[count,setCount]=useState(0)
    const handleClick=useCallback(()=>{
        console.log("child button clicked")
    },[])

    const clickhandle=useCallback(()=>{
      console.log("child clicked button2")
    },[])
    
    console.log("parent rentered")
    
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <br />
      <UseCallbackchild onClick={handleClick} buttonClick={clickhandle}/>
      {/* passing functions as props can trigger unnecessary re-renders because functions are recreated 
      on every render. here React.memo is used for child to prevent re-rendering but still it re-renders
      because function recreated on every render and considered as props change.
      useCallback ensures the function refernce stays the same between renders */}
    </>
  )
}

export default UseCallbackparent

