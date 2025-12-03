import { AppBar, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Tableex1 = () => {
    const [data, setData] = useState([])
    useEffect(() => {

        async function fetchdata() {
            const response = await axios("https://jsonplaceholder.typicode.com/users")
            setData(response.data)
        }
        fetchdata();
    }, [])
    console.log(data)
    return (
        <div style={{ marginTop: "50px" }}>

            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 1200 }} aria-label="simple table">
                    <TableHead sx={{ height: 50 }}>
                        <TableRow sx={{ backgroundColor: 'pink', height: 50, paddingTop: 0, paddingBottom: 0 }}>
                            <TableCell sx={{ height: 50, paddingTop: 0, paddingBottom: 0 }}><Checkbox color='secondary' /></TableCell>
                            <TableCell sx={{ fontSize: 20, fontWeight: '700', height: 50, paddingTop: 0, paddingBottom: 0 }}>ID</TableCell>
                            <TableCell sx={{ fontSize: 20, fontWeight: '700', height: 50, paddingTop: 0, paddingBottom: 0 }} align="center">Name</TableCell>
                            <TableCell sx={{ fontSize: 20, fontWeight: '700', height: 50, paddingTop: 0, paddingBottom: 0 }} align="center">Email</TableCell>
                            <TableCell sx={{ fontSize: 20, fontWeight: '700', height: 50, paddingTop: 0, paddingBottom: 0 }} align="center">Username</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => {
                            return (

                                <TableRow key={row.id}>

                                    <TableCell ><Checkbox /></TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.id}</TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">{row.username}</TableCell>

                                </TableRow>
                            )
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
            {/* <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 1200 }} >
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

                        <TableRow>
                            <TableCell component="th" scope="row"></TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer> */}
        </div>
    )
}

export default Tableex1

