import { Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword2 = () => {
    const navigate=useNavigate()
    const goback=()=>{
        navigate('/')
    }
  return (
    <div style={{height:600, display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Card sx={{width:400,height:400}}>
        <CardHeader title='Forgot Password?'/>
        <CardContent sx={{display:'flex',flexDirection:'column',gap:5}}>
            <Typography>Please enter the registered email address you'd like your password reset information sent to</Typography>
            
            <TextField fullWidth InputProps={{sx:{height:45}}} placeholder='Registered email'/>
            
            <div >
            <Button variant='contained' sx={{textTransform:'none'}} fullWidth>Request reset link</Button><br /><br />
            <Button fullWidth onClick={goback}>Back to Login</Button>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ForgotPassword2
