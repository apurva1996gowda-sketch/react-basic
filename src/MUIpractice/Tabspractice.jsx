import { Box, Card, CardHeader, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
// Tabs make it easy to explore and switch between different views.
const Tabspractice = () => {
    const[activetab,setActive]=useState(0)
    const handlechange=(e,value)=>{
        setActive(value)
    }
  return (
    <div>
      <Tabs onChange={handlechange} value={activetab}>
        <Tab label='Tab1' value={0}/>
        <Tab label='Tab2' value={1}/>
        <Tab label='Tab3' value={2}/>
      </Tabs>
      {activetab==0 && <Box><Card><CardHeader title='Good MORNING'/></Card></Box>}
      {activetab==1 && <Box>Table2 content</Box>}
      {activetab==2 && <Box>Table3 content</Box>}
    </div>
  )
}

export default Tabspractice
