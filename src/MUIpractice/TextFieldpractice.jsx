import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'

const TextFieldpractice = () => {
    const[name,setName]=useState("")
    const handlechange=(e)=>{
        setName(e.target.value)
    }
    const handleclick=()=>{
        alert(`hello ${name}`)
    }
  return (
    <>
    {/* The TextField wrapper component is a complete form control including a label, input, and help text. 
    It comes with three variants: outlined (default), filled, and standard. */}
    <TextField label='Name' variant='outlined'/><br />
    <TextField label='First Name' variant='filled' onChange={handlechange}/>
    <Button variant='contained' onClick={handleclick}>Submit</Button><br />
    <TextField label='Name' variant='standard'/><br /><br />
    {/* label is the name of the textfield appear like placeholder once we click inside the textfield it 
    will become floating label */}
    <TextField label='Username' variant='outlined' required/><br />
    <TextField label='Password' variant='outlined' helperText='Do not share your password with anyone'/><br />
    <TextField label='Password' variant='outlined' type='password'/><br />

    
      
    </>
  )
}

export default TextFieldpractice
