import { AppBar, Autocomplete, Button, IconButton, Toolbar } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'
// The App Bar displays information and actions relating to the current screen.
const AppBarpractice = () => {
  return (
    <>
      <AppBar>
        <Toolbar style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <div>
                <img src="/vite.svg" alt="vite logo" />
            </div>
            <div>Home</div>
            <div>Search bar</div>
            <Button color='error'>Login</Button>
            <div>
                <IconButton size="large" ><DeleteIcon style={{width:50,height:50}}></DeleteIcon></IconButton>
            </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default AppBarpractice
