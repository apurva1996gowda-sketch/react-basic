import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'

const Selectpractice = () => {
    const [lang, setLang] = useState("")
    const[country,setCountry]=useState("")
    console.log(country)
    const handlechange = (e) => {
        setLang(e.target.value)
    }
    const handlecountry=(e)=>{
        setCountry(e.target.value)
    }
    

    return (
        <div style={{width:250}}>
            <Select value={lang} onChange={handlechange} fullWidth>
                <MenuItem value="english">English</MenuItem>
                <MenuItem value="hindi">Hindi</MenuItem>
                <MenuItem value="spanish">Spanish</MenuItem>
            </Select><br /><br />

            <TextField label='Select Country' select value={country} onChange={handlecountry} fullWidth>
                <MenuItem value='india'>India</MenuItem>
                <MenuItem value='usa'>USA</MenuItem>
                <MenuItem value='germany'>Germany</MenuItem>
            </TextField>
        </div>

    )
}

export default Selectpractice
