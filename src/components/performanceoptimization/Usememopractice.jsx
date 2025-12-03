import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

// here one function is there for some calculation and it is called for count(some variable) it should 
// render only when there is update in count but here it is rendering for other update also i.e number 
// to avaoid this and to make this function to render only when there is update in count we can use 
// useMemo for this function. It is used to memorize some expensive calculations
const Usememopractice = () => {
    const[count,setCount]=useState(0)
    const[number,setNumber]=useState(0)
function expensivecal(num){
    let result=num*num
    console.log(result)
}
// expensivecal(count)
useMemo(()=>{expensivecal(count)},[count]) 
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <input type="text"  onChange={(e)=>setNumber(e.target.value)} />
      <h1>number:{number}</h1>
    </>
  )
}

export default Usememopractice
