import React from 'react'
import Paper from '@mui/material/Paper';

// The Paper component is a container for displaying content on an elevated surface
const Paperpractice = () => {
  return (
    <div>
      <Paper sx={{width:300,height:300}} elevation={4}>
        <div>Hello World</div>
      </Paper>
    </div>
  )
}

export default Paperpractice
