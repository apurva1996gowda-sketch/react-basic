import { Button, InputAdornment, Snackbar} from '@mui/material'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import React, { useState } from 'react'

const SearchBarex1 = () => {
    const[open,setOpen]=useState(false)
        const[mes,setMes]=useState("")
        const handlesubmit=()=>{
            if(true)
            {
                setOpen(true)
                setMes('User Created')
            }
        }
  return (
    <div style={{marginTop:"100px",display:'flex',width:'1200px', alignItems:'center',justifyContent:'space-between'}}>
      <TextField
      variant='filled'
      placeholder='Search here'
      InputProps={{startAdornment:(
        <InputAdornment position='start'><SearchIcon/></InputAdornment>
      ) }}/>
      <Button variant='contained' onClick={handlesubmit}>Create User</Button>
      <Snackbar
            open={open}
            message={mes}
            anchorOrigin={{vertical:'top',horizontal:'right'}}
            autoHideDuration={1000}
            onClose={()=>setOpen(true)}/>
    </div>
  )
}

export default SearchBarex1
