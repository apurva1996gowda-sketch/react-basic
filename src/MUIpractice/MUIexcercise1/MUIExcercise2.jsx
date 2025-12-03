import { Button, Card, CardActions, CardContent, CardHeader, Checkbox, Dialog, Divider, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';

const MUIExcercise2 = () => {
    const [open, setOpen] = useState(false)
    const[inputvalue,setInputvalue]=useState("")
    const[password,setPassword]=useState("")
    const navigation = useNavigate()
    const signin = () => {
        setOpen(true)
    }
    const signinmain=()=>{
        if(inputvalue==="")
        {
            alert("Enter your email")
        }
    }
    const toshort=password.length>0 && password.length<8

    const forgotpassword = () => {
        navigation('/forgotpassword')
    }
    return (
        <div>
            <Card sx={{ width: 350, height: 500 }} elevation={7}>
                <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography variant='h5' sx={{ fontWeight: '700' }}>Sign in to My Toolpad Core Next.js App</Typography>
                    <Typography variant='caption' sx={{ textAlign: 'center' }}>Welcome,please sign in to continue</Typography>
                    <Button onClick={signin} variant='outlined' fullWidth sx={{ textTransform: 'capitalize', borderColor: 'black', color: 'black' }} startIcon={<GitHubIcon/>}>Sign In with github</Button>
                    <Divider>or</Divider>
                    <Typography variant='caption'>Email</Typography>
                    <TextField onChange={(e)=>setInputvalue(e.target.value)}  fullWidth placeholder='your@email.com' InputProps={{ sx: { height: 45 } }} />
                    <Typography variant='caption'>Password</Typography>
                    <TextField  error={toshort} helperText={toshort ? "Minimum 8 character required" : ""} onChange={(e)=>setPassword(e.target.value)} fullWidth placeholder='******' InputProps={{ sx: { height: 45 } }} />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', gap: '1px', alignItems: 'center' }}>
                            <Checkbox />
                            <Typography variant='caption'>Remember me</Typography>
                        </div>
                        {/* <Typography variant='caption' onClick={forgotpassword} sx={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}>Forgot password?</Typography> */}
                        <Link to={'/forgotpassword'}><Typography variant='caption' >Forgot password?</Typography></Link>
                        
                    </div>
                    <Button onClick={signinmain} variant='contained' fullWidth sx={{ textTransform: 'capitalize' }}>Sign In</Button>
                    <Button variant='text' fullWidth sx={{ textTransform: 'capitalize' }}>Sign Up</Button>

                </CardContent>
            </Card>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <Card>
                    <CardHeader title='GitHub'/>
                    <CardContent sx={{p:2}}>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus molestiae molestias voluptates quidem ab officia aspernatur eos, pariatur similique eligendi praesentium dignissimos. Aliquid repellat perspiciatis quod voluptas unde doloribus cum.</Typography>

                    </CardContent>
                    <CardActions sx={{p:2,display:'flex',justifyContent:'space-between'}}>
                        <Button variant='contained' onClick={()=>setOpen(false)}>Back</Button>
                        <Button variant='contained'>Next</Button>
                    </CardActions>
                </Card>
            </Dialog>
        </div>
    )
}

export default MUIExcercise2

//         <div style={{display:'flex',alignItems:'center',gap:5}}>
//     <hr style={{flex:'1',border:'none',borderTop:'1px solid grey'}}/>
//     <span style={{fontSize:20}}>or</span>
//     <hr style={{flex:'1',border:'none',borderTop:'1px solid grey'}}/>
// </div>