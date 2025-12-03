import { Autocomplete, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
// The autocomplete is a normal text input enhanced by a panel of suggested options
const Autocompletepractice = () => {
    const[value,setValue]=useState(null)
    const skills=['HTML','CSS','JavaScript','React']
  return (
    <Stack spacing={2} width='250px' >
      <Autocomplete 
      options={skills} 
      renderInput={(params)=><TextField {...params} label='skills'/>}
      value={value}
      />
      {/* options and renderInput props are mandatory for Autocomplete */}
    </Stack>
  )
}

export default Autocompletepractice
