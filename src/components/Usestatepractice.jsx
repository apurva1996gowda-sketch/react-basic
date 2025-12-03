import { useState } from "react"

// counter:state used for number updated
export function Counter() {
    const [count, setCount] = useState(0)

    function increase() {
        setCount(count + 1)
    }
    function decrease() {
        setCount(count - 1)
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={increase}>increment</button>
            <button onClick={decrease}>decrement</button>
            <button onClick={() => setCount(0)}>reset</button>

        </>
    )
}

// theme toggle:used for dynamic styling
export function Display() {
    const [display, setDisplay] = useState(true)

    function handleDis() {
        setDisplay(!display)
    }
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {display ?
                    <div style={{
                        width: 100,
                        height: 100,
                        backgroundColor: "green",
                    }}></div>
                    :
                    <div style={{
                        width: 100,
                        height: 100,
                        backgroundColor: "red",

                    }}></div>
                }
            </div>
            <button onClick={handleDis}>Toggle</button>
        </>
    )
}

export function Show() {
    const [show, setShow] = useState("Correct")

    function showInCorrect() {
        setShow("InCorrect")
    }
    function showCorrect() {
        setShow("Correct")
    }

    return (
        <>
            <h1>{show}</h1>
            <button onClick={showInCorrect}>Incorrect</button>
            <button onClick={showCorrect}>Correct</button>

        </>
    )
}

// state used for conditional rendering
export function ShoworHide() {
    const [showorhide, setShoworhide] = useState(true);
    function showfunc() {
        setShoworhide(!showorhide)
    }
    console.log(showorhide);
    return (
        <>
            {showorhide &&
                <div style={{
                    width: "50px",
                    height: "50px"
                }}>
                    Hello
                </div>
            }
            <button onClick={showfunc} style={{position:"fixed",top:50,left:500}}>{showorhide ? "Show" : "Hide"}</button>
        </>
    )
}

export function Forminput() {
    const [text, setText] = useState("")

    function namefunc() {
        let name = document.getElementById("name").value
        setText(`Welcome ${name} !`)
    }
    const inputstyle = {
        backgroundColor: "lightblue",
        width: 200,
        height: 30,
        border: "none"
    }
    return (
        <>
            <input type="text" placeholder="Enter your name" id="name" style={inputstyle} />
            <button onClick={namefunc} style={{ backgroundColor: "orange", marginLeft: 20 }}>Enter</button>
            <h1>{text}</h1>
        </>
    )
}