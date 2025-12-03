import React, { useState } from 'react'

const Formnew = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    function handlebutton() {
        alert(`${username} logged in successfully`)
        console.log(username,password)
    }


    return (
        <div>
            <form action="">
                <label htmlFor="username">Username</label><br />
                <input type="text" onChange={(e) => setUsername(e.target.value)} /><br />

                <label htmlFor="password">Password</label><br />
                <input type="text" onChange={(e) => setPassword(e.target.value)} /><br />
                <button onClick={handlebutton}>Submit</button>

            </form>
            <h1>{username}</h1>
        </div>
    )
}

export default Formnew

export function Forminputs() {
    const [formdata, setFormdata] = useState({
        username: "",
        password: "",
        email: "",
        phonenumber: ""
    })


    function handlechange(e) {
        setFormdata({
            ...formdata,
            [e.target.name]: [e.target.value]
        }
        )
    }
    function handlebutton(e) {
        e.preventDefault()
        console.log(formdata);
    }

    return (
        <>
            <form action="">
                <label htmlFor="username">Username</label><br />
                <input type="text" name='username' onChange={handlechange} /><br /><br />

                <label htmlFor="password">password</label><br />
                <input type="text" name='password' onChange={handlechange} /><br /><br />

                <label htmlFor="email">email</label><br />
                <input type="text" name='email' onChange={handlechange} /><br /><br />

                <label htmlFor="phonenumber">phonenumber</label><br />
                <input type="text" name='phonenumber' onChange={handlechange} /><br /><br />

                <button onClick={handlebutton}>submit</button>
            </form>

        </>
    )
}

export function Loginform(){
const[logindata,setLogindata]=useState({
    username:"",
    email:"",
    phonenumber:"",
    password:""
})
function handledatachange(e){
    setLogindata({
        ...logindata,
        [e.target.name]:[e.target.value]
    })
}
function handlesubmit(e){
    e.preventDefault()
    console.log(logindata)
}
    return(
        <>
        <form action="" onSubmit={handlesubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" name='username' onChange={handledatachange} /><br />

            <label htmlFor="email">email</label>
            <input type="text" name='email' onChange={handledatachange} /><br />

            <label htmlFor="phonenumber">phonenumber</label>
            <input type="text" name='phonenumber' onChange={handledatachange} /><br />

            <label htmlFor="password">password</label>
            <input type="text" name='password' onChange={handledatachange} /><br />

            <input type="submit" />
        </form>
        
        </>
    )
}



