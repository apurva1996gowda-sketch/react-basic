import React from 'react'
import { useRef } from 'react'

const Userefpractice = () => {
    const headingRef=useRef(null)
    const paraRef=useRef(null)
    const inputRef=useRef(null)
    function changehandle(){
        headingRef.current.style.backgroundColor='pink'
        headingRef.current.style.color='green'

        paraRef.current.style.fontSize="100px"
        paraRef.current.style.backgroundColor="blue"

    }
    function submithandle(){
        inputRef.current.placeholder="Enter your name"
        inputRef.current.style.backgroundColor="pink"

    }

  return (
    <>
      <h1 ref={headingRef}>Hello, Good Morning</h1>
      <p ref={paraRef}>I'm paragraph</p>
      <button onClick={changehandle}>Change h1</button><br /><br />
      <input type="text" ref={inputRef} /><br />
      <button onClick={submithandle}>Submit</button>
    </>
  )
}

export default Userefpractice
