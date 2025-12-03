import React, { useState } from 'react'
import {debounce} from 'lodash'

const Debouncepract = () => {
    const[name,setName]=useState("")

    const handlechange=debounce((e)=>{
        setName(e.target.value)
        console.log(e.target.value)
    },2000)
  return (
    <>
    <input type="text" onChange={handlechange} />
    <br /><br />
    <h1>{name}</h1>

      
    </>
  )
}

export default Debouncepract
