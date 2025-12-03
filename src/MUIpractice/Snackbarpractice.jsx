import { Button, Snackbar } from '@mui/material'
import React, { useState } from 'react'
// Snackbars (also known as toasts) are used for brief notifications of processes that have been or 
// will be performed.
const Snackbarpractice = () => {
    const[open,setOpen]=useState(false)
    const[mes,setMes]=useState("")
    const handlesubmit=()=>{
        if(true)
        {
            setOpen(true)
            setMes('Successful')
        }
        else{
            setOpen(true)
            setMes('Unsuccessful')
        }
    }
  return (
    <>
    <Button onClick={handlesubmit}>Submit</Button>
      <Snackbar
      open={open}
      message={mes}
      anchorOrigin={{vertical:'top',horizontal:'right'}}
      autoHideDuration={2000}
      onClose={()=>setOpen(true)}/>
    </>
  )
}

export default Snackbarpractice
