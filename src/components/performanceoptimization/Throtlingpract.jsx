import React, { useRef, useState } from 'react'

const Throtlingpract = () => {
    const[count,setCount]=useState(0)
    const setLimit=useRef(0)

    const handleclick=()=>{
       if(setLimit.current<10) 
       {
        setLimit.current += 1;
        setCount(count+1)
        console.log(count);
       }
       else{
        console.log("limit applied")
       }
    }
  return (
    <>
      <h1>{count} </h1>
      <button onClick={handleclick}>increment</button>
    </>
  )
}

export default Throtlingpract
