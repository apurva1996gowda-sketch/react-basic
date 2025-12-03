import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import React from 'react'

const FormPractice = () => {
    return (
        <>
            <Stack sx={{width:1000,justifyContent:'center'}}>
                <Stack spacing={2} sx={{ width: 350 }} >
                    <TextField variant='outlined' label="First Name"></TextField>
                    <TextField variant='outlined' label="Last Name"></TextField>
                    <TextField variant='outlined' label="Phone Number"></TextField>
                    <Button variant='contained'>Submit</Button>
                </Stack>
            </Stack>

        </>
    )
}

export default FormPractice
