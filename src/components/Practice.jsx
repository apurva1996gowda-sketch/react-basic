import React, { useEffect, useState } from 'react'

const Practiceform = () => {
    const [inputs, setInputs] = useState({ firstname: "", lastname: "", email: "", phonenumber: "" })

    useEffect(
        () => console.log("hello"),
        [inputs.firstname, inputs.lastname])

    useEffect(() => alert("ONLY ON LOADING"), [])

    const changefunc = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: [e.target.value]
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
        localStorage.setItem('inputs', JSON.stringify(inputs));
        alert(`${inputs.firstname + " " + inputs.lastname} registered successfully`)
    }


    return (
        <div>
            <form action="" onSubmit={handlesubmit}>
                <label htmlFor="firstname">firstname</label><br />
                <input type="text" name='firstname' onChange={changefunc} /><br />

                <label htmlFor="lastname">lastname</label><br />
                <input type="text" name='lastname' onChange={changefunc} /><br />

                <label htmlFor="email">email</label><br />
                <input type="text" name='email' onChange={changefunc} /><br />

                <label htmlFor="phonenumber">phonenumber</label><br />
                <input type="text" name='phonenumber' onChange={changefunc} /><br />
                <button type='submit'>Register</button>
            </form>


        </div>
    )
}

export default Practiceform

export function Dashboard() {
    const users = localStorage.getItem('inputs')
    const userobject = JSON.parse(users);
    console.log(userobject)
    return (
        <>
            <h5>name:{userobject.firstname + userobject.lastname}</h5>
        </>
    )
}


export function Practicenew(){
    const[inputdata,setInputdata]=useState({
        name:"",
        age:"",
        email:""
    })
    function handlechange(e){
        setInputdata({
            ...inputdata,
            [e.target.name]:[e.target.value]})
    }
    

    return(
        <>
        <form action="">
            <input type="text" name='name' onChange={handlechange} />
            <input type="text" name='age' onChange={handlechange} />
            <input type="text" name='email' onChange={handlechange} />
        </form>
        <h1>{inputdata.name}</h1>
        
        </>
    )
}
