import React from 'react'
import { useEffect } from 'react';

const Propschild =({age,count,name,setCount,funct,array,object}) => {

    useEffect(()=>funct(10),[])
    
  return (
    <>
      <h1>{name}:{age}</h1>
      <h1>{count}</h1>
      <h2>{object.name}</h2>
      <button onClick={()=>setCount(count+3)}>childupdate</button>
      <div style={{display:'flex', gap:10}}>
      {array.map((num,index)=>
      {return(
        <span key={index} >{num/6}</span>
      )}
    
    )}
    </div>
    </>
  )
}


export default Propschild
