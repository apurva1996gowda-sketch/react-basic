import React from 'react'

const UseCallbackchild = React.memo(({onClick,buttonClick}) => {
    console.log('child rendered')
  return (
    <>
      <button onClick={onClick}>click child</button>
      <button onClick={buttonClick}>BUTTON2</button>
    </>
  )
})

export default UseCallbackchild
