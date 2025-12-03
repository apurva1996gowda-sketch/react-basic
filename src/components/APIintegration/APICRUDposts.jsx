import { AppBar, Box, Button, Card, CardActions, CardContent, CardHeader, Dialog, Grid, Snackbar, TextField, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material';

const APICRUDposts = () => {
    const [posts, setPosts] = useState([])
    const [dialogopen, setDialogopen] = useState(false)
    const [formdata, setFormdata] = useState({ title: "", description: "" })
    const [snackopen, setSnackopen] = useState(false)
    const [snackmessage, setSnackmessage] = useState("")
    const [editMode, setEditMode] = useState(false)
    const[loading,setLoading]=useState(false)
    const fetchdata = async () => {
        try {
            setLoading(true)
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setPosts(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            
        }
    }

    useEffect(() => {
        fetchdata()
    }, [])

    const handlecreate = async () => {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts",
            {
                "title": formdata.title,
                "body": formdata.description
            }
        )
        setDialogopen(false)
        setFormdata({ title: "", description: "" })
        setSnackopen(true)
        setSnackmessage("post created successfully")
    }

    const handlecancel = () => {
        setDialogopen(false)
        setFormdata({ title: "", description: "" })

    }

    const handleedit = (posts) => {
        setDialogopen(true)
        setFormdata({ title: posts.title, description: posts.body, id: posts.id })
        setEditMode(true)
    }

    const handleupdate = async()=> {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${formdata.id}`,
        {
            "title": formdata.title,
            "body": formdata.description
        }
    )
    setDialogopen(false)
    setSnackopen(true)
    setSnackmessage("post updated successfully")
}

const handledelete=async(id)=>{
    const response=await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    setSnackopen(true)
    setSnackmessage("post deleted successfully")
}

return (
    <>

        {/* UI */}
        <AppBar sx={{ position: 'static' }}>
            <Toolbar>
                <Typography variant='h5'>CRUD operations for posts</Typography>
            </Toolbar>
        </AppBar>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 2, padding: 2 }}>
            <Typography variant='h5'>Posts</Typography>
            <Button variant='contained' onClick={() => {setDialogopen(true) 
                setEditMode(false)}}>+ Create post</Button>
        </Box>

        {loading ? <Box><CircularProgress/></Box> : 

        <Grid container spacing={2}>
            {posts.map((posts) => {
                return (
                    <Grid size={4} key={posts.id}>
                        <Card sx={{ height: 200, padding: 1 }} elevation={5}>
                            {/* <CardHeader sx={{height:'20%'}} title={posts.title}/> */}
                            <CardContent sx={{ height: '85%' }}>
                                <Typography variant='h6'>{posts.title}</Typography>
                                <Typography variant='body2'>{posts.body}</Typography>
                            </CardContent>
                            <CardActions sx={{ height: '15%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Button sx={{ color: 'orange' }} onClick={() => { handleedit(posts) }}>Edit</Button>
                                <Button sx={{ color: 'red' }} onClick={()=>{handledelete(posts.id)}}>Delete</Button>
                            </CardActions>
                        </Card>

                    </Grid>
                )
            })}

        </Grid>
}
        {/* Dialog/Modal */}

        <Dialog open={dialogopen}>
            <Card sx={{ width: 500, height: 250 }}>
                <CardContent sx={{ height: '70%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField value={formdata.title} onChange={(e) => setFormdata((prev) => ({ ...prev, title: e.target.value }))} label='title' fullWidth />
                    <TextField value={formdata.description} onChange={(e) => setFormdata((prev) => ({ ...prev, description: e.target.value }))} label='description' fullWidth />
                </CardContent>
                <CardActions sx={{ height: '30%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}>
                    <Button variant='contained' onClick={editMode ? handleupdate : handlecreate}>{editMode ? "Update" : "Create"}</Button>
                    <Button variant='contained' onClick={handlecancel}>Cancel</Button>
                </CardActions>
            </Card>
        </Dialog>

        {/* Snackbar */}

        <Snackbar open={snackopen} message={snackmessage} onClose={() => setSnackopen(false)} autoHideDuration={2000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} />


    </>
)
}

export default APICRUDposts
