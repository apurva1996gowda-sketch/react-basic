import React from 'react'
import { useState } from 'react'
import Reactmemochild from './Reactmemochild'

// React.memo is used to avoid unnecessary rendering of child component, here some code is there in child 
// component(console.log("hello") it will be rendered everytime when we update something in parent
// (even though there is no update in child) to avoid 
// that we can wrap child component inside React.memo() so that it will be rendered only once on loading
// child component and when there is an update in child component. 

const Reactmemoparent = () => {
    const[num,setNum]=useState(0)
  return (
    <>
      <h1>number:{num}</h1>
      <button onClick={()=>setNum(num+1)}>Increment</button>
      <Reactmemochild></Reactmemochild>
    </>
  )
}

export default Reactmemoparent
