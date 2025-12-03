import { useEffect, useState } from "react";
import axios from "axios";


// fetching api data using fetch
export function APIinteusingfetch() {
    const [data, setData] = useState([]);


    async function fetchapidata() {
        try {

            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(data)

    useEffect(() => {
        fetchapidata();
    }, [])

    return (
        <>
            {data.map((name) => {
                return (
                    <div key={name.id}>
                        <span>{name.id}. {name.title}</span>
                    </div>
                )
            })}

        </>
    )
}


// fetching api data using axios

export function APIinteusingaxios() {
    const [data, setData] = useState([])

    async function axiosdata() {
        try {
            const response = await axios("https://jsonplaceholder.typicode.com/posts")
            // no need to convert to json when we fetch api data using axios
            setData(response.data)
            // if we fetch api using axios the response will have sections and data will be in data section 
            // so we use .data to use that
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        axiosdata();
    })
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {data.map((user) => {
                    return (
                        <div key={user.id} style={{ border: "1px solid black", backgroundColor: "pink", width: 700 }}>
                            <b>{user.id}. {user.title}</b> <br />{user.body}
                        </div>
                    )
                })}
            </div>
        </>
    )
}