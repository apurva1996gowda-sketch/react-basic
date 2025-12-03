import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"

function PracticeReact() {
    return (
        <>
            Default export component
        </>
    )
}
export default PracticeReact

export function PracticeReact1() {
    return (
        <>
            Named export component
        </>
    )
}

export const PracticeUseState = () => {
    const[formdata,setFormdata]=useState({username:'',email:''})
    const[input,setInput]=useState({username:'',email:''})
    const handleinput=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value})
    }
    console.log(formdata)
    return (
        <>
            <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
                <TextField label='username' name="username" value={formdata.username} onChange={handleinput}/>
                <TextField label='email' name="email" value={formdata.email} onChange={handleinput}/>
                <Button variant="contained">Submit</Button>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
                <TextField label='username' value={formdata.username} onChange={(e)=>{setInput((prev)=>({...prev,username:e.target.value}))}}/>
                <TextField label='email'  value={formdata.email} onChange={(e)=>{setInput((prev)=>({...prev,email:e.target.value}))}}/>
                <Button variant="contained" type="submit">Submit</Button>
            </Box>
        </>
    )
}