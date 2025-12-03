import { Box, FormControl, FormLabel } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import React, { useState } from 'react'
// Checkbox component allows the user to select multiple options from the set also they use option turn on or off
const Checkboxpractice = () => {
    const[checked,setChecked]=useState(true)
    const[terms,setTerms]=useState(true)
    const handleChange=(e)=>{
        setChecked(e.target.checked)
    }
    const handleterms=(e)=>{
        setTerms(e.target.checked)
    }
    console.log('checked',checked)
    return (
        <>
            <Checkbox
                checked={checked}
                onChange={handleChange}
                color='error' 
                size='large'/>check
            <FormGroup row>{/*by default group elements arranged in column by row props we can change */}
                <FormControlLabel control={<Checkbox />} label="HTML" />
                <FormControlLabel control={<Checkbox />} label="CSS" />
                <FormControlLabel control={<Checkbox />} label="JavaScript" />
            </FormGroup>

            <Box>
                <FormControlLabel label='I accept terms and conditions' control={<Checkbox checked={terms} onChange={handleterms}/>}/>
            </Box>

            <FormControl sx={{border:'1px solid black',width:200,marginLeft:50}}>
                <FormLabel sx={{color:'blue',fontSize:25}}>Interests</FormLabel>
                <FormControlLabel control={<Checkbox/>} label='Art'/>
                <FormControlLabel control={<Checkbox/>} label='Music'/>
                <FormControlLabel control={<Checkbox/>} label='Dance'/>
                <FormControlLabel control={<Checkbox/>} label='Cooking'/>
            </FormControl>
        </>
    )
}

export default Checkboxpractice
