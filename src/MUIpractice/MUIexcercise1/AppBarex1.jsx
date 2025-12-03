import { AppBar, Box, IconButton, MenuItem, Stack, TextField, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';
import React from 'react'

const AppBarex1 = () => {
    return (
        < >
            <AppBar>
                <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <IconButton><MenuIcon sx={{ color: 'white' }} /></IconButton>
                        <Typography variant='h6'>Users</Typography>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: 25 }}>
                        <IconButton><RefreshIcon sx={{ color: 'white' }} /></IconButton>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid white', backgroundImage: "url('/profilephoto.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        <Typography variant='h6'>Apurva Chamegowda</Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default AppBarex1
