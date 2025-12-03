
function Main() {

    return (
        <>
            <h1>Welcome</h1>
            <button onClick={() => alert("Good Morning")}>Click Here</button>
            <Counter />
            <Factorial />
        </>
    )
}
export default Main;

export function Counter() {
    let increment = 0;
    function incre() {
        increment++;
        document.getElementById("count").innerHTML = increment;
    }
    function decre() {
        increment--;
        document.getElementById("count").innerHTML = increment;
    }

    return (
        <>
            <h1 id="count">0</h1>
            <button onClick={incre}>increment</button ><button onClick={decre}>decrement</button>
        </>
    )
}

function Factorial() {
    function fact(n) {
        let prod = 1;
        for (let i = 1; i <= n; i++) {
            prod *= i;
        }
    
        document.getElementById("result").innerHTML = `Result:${prod}`
        document.getElementById("number").innerHTML = `Number:${n}`
    }
    

    return (
        <>
        <style>{`
        .facthead{
        color:blue;
        }
        .displayresult{
        display:flex;
        gap:190px;
        margin-left:400px;
        }
        `}</style>
            <h1 className="facthead">Factorial of a number</h1>
            <div className="displayresult">
                <h1 id="number">Number:</h1>
                <h1 id="result">Result:</h1>
            </div>
            <button onClick={() => fact("3")}>Check</button>
        </>
    )
}
// used CSS in JSX with style tag