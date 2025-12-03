import { Box, Button, IconButton, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import RefreshIcon from '@mui/icons-material/Refresh';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CounterApp = () => {
    const[settingsopen,setSettingsopen]=useState(false)
    const[count,setCount]=useState(0)
  return (
    <>
    <Box sx={{display:'flex',justifyContent:'center',backgroundColor:'black'}}>
        <IconButton><InfoIcon sx={{color:'white'}}/></IconButton>
        <IconButton onClick={()=>setSettingsopen(true)}><SettingsIcon sx={{color:'white'}}/></IconButton>
        <IconButton onClick={()=>setCount(0)}><RefreshIcon sx={{color:'white'}}/></IconButton>
    </Box>
    {settingsopen ? 
    <Box sx={{display:'flex',justifyContent:'center'}}>
        <Paper elevation={6} sx={{width:200,height:200}}>
            <Typography>Settings</Typography>
            <Button onClick={()=>setSettingsopen(false)}>Close</Button>
        </Paper>
    </Box>
    :
    <Box sx={{height:570,display:'flex',alignItems:'center',justifyContent:'space-between',backgroundColor:'black'}}>
        <IconButton onClick={()=>setCount(count-1)}><RemoveIcon sx={{width:100,height:100,color:'white'}}/></IconButton>
        <Typography variant='h1'sx={{color:'white'}}>{count}</Typography>
        <IconButton onClick={()=>setCount(count+1)}><AddIcon sx={{width:100,height:100,color:'white'}}/></IconButton>
    </Box>
     
    }
      
    </>
  )
}

export default CounterApp
