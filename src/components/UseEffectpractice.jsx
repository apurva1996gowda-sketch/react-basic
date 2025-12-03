import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffectpractice = () => {
    const[users,setUsers]=useState([])

    async function fetchdata(){
        try {
            
            const resp=await axios.get("https://jsonplaceholder.typicode.com/users");
            // const data=await resp.json();
            // console.log(resp);
            setUsers(resp.data);
        } catch (error) {
            console.log(error,"error")
        }
    }
    console.log(users)

    useEffect(
        ()=>{
            fetchdata()
        }
    ,[])
    return (
        <>
      {users.map((user)=>{
        return(  
    <div key={user.id}>
      <p>{user.id}{user.name}{user.email}</p>
    </div>
        )
      })}
</>
  )
}



export default UseEffectpractice
