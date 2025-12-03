import React from 'react'
import { useState } from 'react'
import Propschild from './Propschild'
import { useMemo } from 'react'

const Propsparent = () => {
    const[count,setCount]=useState(0)
    function iseven(n){
        (n%2==0) ? console.log("number is even") : console.log("number is odd")
    }
  return (
    <>
        {/* props are used to pass data from one element(parent) to another element(child) 
        data can be anything like string, number,object,array,function and multiple props can be passed
        at a time*/}
        
      <Propschild age={25} name="apurva" funct={iseven} array={[6,12,18,24,30,36]} object={{name:"appu",age:28}}
      count={count} setCount={setCount}></Propschild> 

      
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </>
  )
}

export default Propsparent
