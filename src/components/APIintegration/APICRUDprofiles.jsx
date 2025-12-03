import { AppBar, Box, Button, ButtonGroup, Dialog, Paper, TextField, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const APICRUDprofiles = () => {
    const [users, setUsers] = useState([])
    const [modalopen, setModalopen] = useState(false)
    const [postuser, setPostuser] = useState({ name: '', username: '', email: '' })
    const[editmode,setEditmode]=useState(false)

    const fetchusers = async () => {
        const users = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(users.data)
    }
    useEffect(() => {
        fetchusers()
    }, [])

    const handleinput = (e) => {
        setPostuser({ ...postuser, [e.target.name]: [e.target.value] })
    }

    const handlepost = async () => {
        const response = await axios.post("https://jsonplaceholder.typicode.com/users",
            {
                "name": postuser.name,
                "username": postuser.username,
                "email": postuser.email
            }
        )
        setPostuser({ name: '', username: '', email: '' })
        setModalopen(false)
        
    }
    
    const handleedit=(users)=>{
        setPostuser({name:users.name,username:users.username,email:users.email,id:users.id})
        setModalopen(true)
        setEditmode(true)
    }
    
    const handleupdate=async()=>{
        const response=await axios.put(`https://jsonplaceholder.typicode.com/users/${postuser.id}`,
            {
                "name": postuser.name,
                "username": postuser.username,
                "email": postuser.email
            }
        )
        setModalopen(false)
        setPostuser({ name: '', username: '', email: '' })
        

    }

    const handledelete=async(id)=>{
        const response=await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    }
    return (
        <Box>
            <Dialog open={modalopen} >
                <Paper sx={{ width: 300, height: 300, padding: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField label='name' name='name' onChange={handleinput} value={postuser.name}/>
                        <TextField label='username' name='username' onChange={handleinput} value={postuser.username} />
                        <TextField label='email' name='email' onChange={handleinput} value={postuser.email}/>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 2 }}>
                        <Button variant='contained' onClick={editmode ? handleupdate : handlepost}>{editmode ? "update" : "add user"}</Button>
                        <Button variant='contained' onClick={() => {
                            setPostuser({ name: '', username: '', email: '' })
                            setModalopen(false)
                        }}>CANCEL</Button>
                    </Box>
                </Paper>
            </Dialog>




            <AppBar sx={{ bgcolor: 'purple', position: 'static' }}>
                <Toolbar>
                    <Typography variant='h5'>CRUD operations for users</Typography>
                </Toolbar>
            </AppBar>

            <Button onClick={() => {setModalopen(true)
                setEditmode(false)
            }} variant='contained' sx={{ textTransform: 'capitalize', backgroundColor: 'purple', my: 4, position: 'relative', left: "1200px" }}>New user</Button>

            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: 1300, marginBottom: 2 }}>
                <Typography variant='h5' sx={{ width: 100, textAlign: 'center' }}>Sl.No</Typography>
                <Typography variant='h5' sx={{ width: 200, textAlign: 'center' }}>Name</Typography>
                <Typography variant='h5' sx={{ width: 200, textAlign: 'center' }}>UserName</Typography>
                <Typography variant='h5' sx={{ width: 200, textAlign: 'center' }}>email</Typography>
                <Typography variant='h5' sx={{ width: 200, textAlign: 'center' }}>Actions</Typography>
            </Box>

            {users.map((users) => {
                return (
                    <Box key={users.id} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: 1300 }}>
                        <Typography variant='subtitle1' sx={{ width: 100, textAlign: 'center' }}>{users.id}</Typography>
                        <Typography variant='subtitle1' sx={{ width: 200, textAlign: 'center' }}>{users.name}</Typography>
                        <Typography variant='subtitle1' sx={{ width: 200, textAlign: 'center' }}>{users.username}</Typography>
                        <Typography variant='subtitle1' sx={{ width: 200, textAlign: 'center' }}>{users.email}</Typography>
                        <Box sx={{ width: 150, display: 'flex', gap: 2 }}>
                            <Button onClick={()=>handleedit(users)} sx={{ color: 'orange' }}>Edit</Button>
                            <Button color='error'onClick={()=>handledelete(users.id)}>Delete</Button>
                        </Box>

                    </Box>

                )
            })}


        </Box>
    )
}

export default APICRUDprofiles
