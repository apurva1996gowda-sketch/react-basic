import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, fetchusers } from '../Redux/usersSlice'
import { AppBar, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@mui/material'

const APIforUsers = () => {
    const dispatch = useDispatch()
    const { data,loading } = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(fetchusers())
    }, [])
    console.log(data.data)
    console.log(loading)
    if(loading) 
        return <h1>Loading....</h1>
    
    return (
        <>
            <AppBar sx={{ position: 'static' }}>
                <Toolbar sx={{ fontSize: '30px' }}>Users</Toolbar>
            </AppBar>
            <TableContainer component={Paper}>

                <Table sx={{ maxWidth: 1300 }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell align="center" sx={{ fontWeight: '700' }}>ID</TableCell>
                            <TableCell align="center" sx={{ fontWeight: '700' }}>Name</TableCell>
                            <TableCell align="center" sx={{ fontWeight: '700' }}>Username</TableCell>
                            <TableCell align="center" sx={{ fontWeight: '700' }}>Email</TableCell>
                            <TableCell align="center" sx={{ fontWeight: '700' }}>Phone Number</TableCell>
                            <TableCell align="center" sx={{ fontWeight: '700' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((user) => {
                            return (

                                <TableRow key={user.id}>
                                    <TableCell align="center">{user?.id}</TableCell>
                                    <TableCell align="center">{user?.name?.firstname + user?.name?.lastname}</TableCell>
                                    <TableCell align="center">{user?.username}</TableCell>
                                    <TableCell align="center">{user?.email}</TableCell>
                                    <TableCell align="center">{user?.phone}</TableCell>
                                    <TableCell align="center" sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                                        <Button variant='contained' sx={{ backgroundColor: 'orange' }}>Edit</Button>
                                        <Button variant='contained' onClick={()=>dispatch(deleteData(user.id))} sx={{ backgroundColor: 'red' }}>Delete</Button>
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

export default APIforUsers
