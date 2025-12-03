import { AppBar, Box, Button, Dialog, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const APICRUDtest = () => {
    const [users, setUsers] = useState([])
    const [modalopen, setModalopen] = useState(false)
    const [postuser, setPostuser] = useState({ name: "", username: "", email: "", phone: "" })
    const [snackopen, setSnackopen] = useState(false)
    const [snackmessage, setSnackmessage] = useState("")
    const [updatemode, setUpdatemode] = useState(false)

    const getdata = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(result.data)
    }

    useEffect(() => {
        getdata()
    }, [])

    const handleinput = (e) => {
        setPostuser({ ...postuser, [e.target.name]: e.target.value })
    }

    const handlecreate = async () => {
        const result = await axios.post("https://jsonplaceholder.typicode.com/users",
            {
                "name": postuser.name,
                "username": postuser.username,
                "email": postuser.email,
                "phone": postuser.phone
            }
        )
        setModalopen(false)
        setPostuser({ name: "", username: "", email: "", phone: "" })
        setSnackopen(true)
        setSnackmessage("post created successfully")

    }
    const handlecancel = () => {
        setModalopen(false)
        setPostuser({ name: "", username: "", email: "", phone: "" })
    }
    const handleedit = (data) => {
        setModalopen(true)
        setPostuser({ name: data.name, username: data.username, email: data.email, phone: data.phone, id: data.id })
        setUpdatemode(true)
    }
    const handleupdate = async () => {
        const result = await axios.put(`https://jsonplaceholder.typicode.com/users/${postuser.id}`,
            {
                "name": postuser.name,
                "username": postuser.username,
                "email": postuser.email,
                "phone": postuser.phone
            }
        )
        setModalopen(false)
        setPostuser({ name: "", username: "", email: "", phone: "" })
        setUpdatemode(false)
        setSnackopen(true)
        setSnackmessage("post updated successfully")
    }
    
    const handledelete=async(id)=>{
        const result=await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        setSnackopen(true)
        setSnackmessage("post deleted successfully")
    }

    return (
        <>
            <Snackbar
                open={snackopen}
                autoHideDuration={2000}
                onClose={() => setSnackopen(false)}
                message={snackmessage}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
            <Dialog open={modalopen} >
                <Paper sx={{ width: 500, height: 350, padding: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <TextField label='name' name='name' value={postuser.name} onChange={handleinput} />
                        <TextField label='username' name='username' value={postuser.username} onChange={handleinput} />
                        <TextField label='email' name='email' value={postuser.email} onChange={handleinput} />
                        <TextField label='phone' name='phone' value={postuser.phone} onChange={handleinput} />
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 1 }}>
                            <Button variant='contained' onClick={updatemode ? handleupdate : handlecreate}>{updatemode ? "update" : "create"}</Button>
                            <Button variant='contained' onClick={handlecancel}>cancel</Button>
                        </Box>
                    </Box>
                </Paper>
            </Dialog>
            <AppBar sx={{ position: 'static' }}>
                <Toolbar>
                    <Typography variant='h5'>Users CRUD App</Typography>
                </Toolbar>
            </AppBar>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 2, marginLeft: 1 }}>
                <Typography variant='h5'>Users</Typography>
                <Button variant='contained' onClick={() => {
                    setModalopen(true)
                    setUpdatemode(false)
                }
                }>+add user</Button>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 1400 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Username</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((data) => {
                            return (

                                <TableRow key={data.id}>
                                    <TableCell component="th" scope="row">{data.id}</TableCell>
                                    <TableCell align="center">{data.name} </TableCell>
                                    <TableCell align="center">{data.username} </TableCell>
                                    <TableCell align="center">{data.email} </TableCell>
                                    <TableCell align="center">{data.phone} </TableCell>
                                    <TableCell align="center" sx={{ display: 'flex', gap: 1,marginLeft:5 }}>
                                        <Button variant='contained' onClick={() => { handleedit(data) }}>Edit</Button>
                                        <Button variant='contained' color='error'onClick={()=>{handledelete(data.id)}}>delete</Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default APICRUDtest
