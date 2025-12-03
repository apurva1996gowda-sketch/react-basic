import { AppBar, Box, Button, Card, CardActions, CardContent, CardHeader, CircularProgress, Dialog, Grid, Snackbar, TextField, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const APICRUD = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [postdata, setPostdata] = useState({ title: "", description: "" })
    const [createopen, setCreateopen] = useState(false)
    const [createsnack, setCreatesnack] = useState(false)
    const [createmessage, setCreatemessage] = useState("")
    const[editMode,setEditMode]=useState(false)
    async function fetchdata() {
        try {
            setLoading(true)
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json();
            setPosts(data)
            setLoading(false)

        } catch (error) {
            console.log("error", error)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchdata()
    }, [])

    const handleedit = (posts) => {
        setPostdata({
            title: posts.title, description: posts.body, id: posts.id
        })
        setCreateopen(true)
        setEditMode(true)
        
    }
    
    const handleeditMode = async () => {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postdata.id}`,
            {
                "title": postdata.title,
                "body": postdata.description
            }
        )
        setPostdata({ title: '', description: "" })
        setCreatesnack(true)
        setCreatemessage("Update successfully")
        setCreateopen(false)
        setEditMode(false)
        
    }

    const handlecreate = async () => {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts",
            {
                "title": postdata.title,
                "body": postdata.description
            }
        )
        setCreateopen(false)
        setPostdata({ title: '', description: "" })
        setCreatesnack(true)
        setCreatemessage("post created successfully")
    }
    
    const handleDelete=async(id)=>{
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        setCreatesnack(true)
        setCreatemessage("post deleted successfully")
        
    }
    const handlecancel=()=>{
        setCreateopen(false)
        setPostdata({ title: '', description: "" })
    }

    return (
        <>
            {/* MODAL
            <Dialog open={editopen} onClose={() => setEditopen(false)}>
                {selecteditem && (

                    <Card sx={{ height: 200 }}>
                        <CardHeader title={`Post ${selecteditem.id}`} sx={{ height: '10%' }} />
                        <CardContent sx={{ height: '65%' }}>

                            {selecteditem.body}
                        </CardContent>
                        <CardActions sx={{ height: '15%' }}>
                            <Button variant='contained' color='success'>Update</Button>
                            <Button variant='contained' onClick={() => setEditopen(false)}>Cancel</Button>
                        </CardActions>
                    </Card>
                )}

            </Dialog> */}

            {/*MODAL */}
            <Dialog open={createopen} >


                <Card sx={{ padding: 3, width: 500, height: 250 }}>
                    {/* <CardHeader title={`Post:${postdata.title}`} sx={{ height: '10%' }} /> */}
                    <CardContent sx={{ height: '70%' }}>
                        <TextField label='post title' value={postdata.title}
                            onChange={(e) => setPostdata((prev) => ({ ...prev, title: e.target.value }))} sx={{ marginBottom: 1 }} fullWidth
                        />
                        {/* other method is onChange={handlechange},name='title'
                    const handlechange=(e)=>{setPostdata({...postdata,[e.target.name]:[e.target.value]})} */}

                        <TextField label='Description' value={postdata.description}
                            onChange={(e => setPostdata((prev) => ({ ...prev, description: e.target.value })))} fullWidth />
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button onClick={editMode ? handleeditMode : handlecreate} variant='contained' color='success'>{editMode ? "Update" : "Create"}</Button>
                        <Button variant='contained' onClick={handlecancel}>Cancel</Button>
                    </CardActions>
                </Card>
            </Dialog>
            {/* Create snackbar */}
            <Snackbar
                open={createsnack}
                autoHideDuration={2000}
                onClose={() => setCreatesnack(false)}
                message={createmessage}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                ContentProps={{ sx: { backgroundColor: 'white', color: 'green', fontWeight: '700' } }}
            />
            <Box>
                <AppBar sx={{ position: 'static' }}>
                    <Toolbar>
                        <Typography variant='h5'>API CRUD</Typography>
                    </Toolbar>
                </AppBar>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 4 }}>
                    <Box>
                        <Typography variant='h5'>Posts</Typography>

                    </Box>
                    <Box>
                        <Button variant='contained' onClick={() => setCreateopen(true)}>Create Posts</Button>
                    </Box>
                </Box>
                {loading ? <Box><CircularProgress /></Box> :
                    <Box >
                        <Grid container spacing={2} sx={{ paddingLeft: 2 }} >
                            {posts.map((posts) => {
                                return (
                                    <Grid size={4} key={posts.id}>

                                        <Card sx={{ height: 200 }}>
                                            <CardHeader title={`Post ${posts.id}`} sx={{ height: '10%' }} />
                                            <CardContent sx={{ height: '65%' }}>

                                                {posts.body}
                                            </CardContent>
                                            <CardActions sx={{ height: '15%' }}>
                                                <Button variant='contained' onClick={() => handleedit(posts)} sx={{ bgcolor: 'orange' }}>edit</Button>
                                                <Button variant='contained' color='error' onClick={()=>handleDelete(posts.id)}>Delete</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>

                    </Box>
                }
            </Box>

        </>
    )
}

export default APICRUD
