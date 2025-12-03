import Radio from '@mui/material/Radio'
import {Box, FormControl, FormControlLabel, FormHelperText, FormLabel, RadioGroup} from '@mui/material'
import React, { useState } from 'react'
// Radio component allows the user to select one option from the set
const Radiopractice = () => {
    const[gender,setGender]=useState('')
    const[exp,setExp]=useState('')
    console.log(exp)
    const handlechange=(e)=>{
        setGender(e.target.value)
    }
    const handleexp=(e)=>{
        setExp(e.target.value)
    }
    console.log(gender)
  return (
    <>
      <Radio 
      checked={gender=='male'} 
      value='male' 
      onChange={handlechange}
      size='medium'
      color='success' />Male<br />
      <Radio checked={gender=='female'} value='female' onChange={handlechange}/>Female <br /><br />

      <Box>
        <FormControl>
            <FormLabel id='job-exp-label'>Years of experience</FormLabel>
        </FormControl>
        <RadioGroup name='job-exp-group' aria-labelledby='job-exp-label' value={exp} onChange={handleexp} row>
            <FormControlLabel control={<Radio />} label='0-2' value='0-2'/>
            <FormControlLabel control={<Radio />} label='3-5' value='3-5'/>
            <FormControlLabel control={<Radio />} label='6-8' value='6-8'/>
        </RadioGroup>
        <FormHelperText>Your experience is selected as {exp}</FormHelperText>
      </Box>
      {/* Radio,FormControlLabel are self closing */}
    </>
  )
}

export default Radiopractice
