import Switch from '@mui/material/Switch'
import React, { useState } from 'react'

const Switchpractice = () => {
    const[mode,setMode]=useState(true)
    const handlechange=(e)=>{
        setMode(e.target.checked)
    }
    console.log(mode)
  return (
    <>
      Light <Switch checked={mode} onChange={handlechange}/> Dark
    </>
  )
}

export default Switchpractice
