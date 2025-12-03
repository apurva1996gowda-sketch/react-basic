import React from 'react'

const Child = () => {
  return (
    <>
      <h1>heading1</h1>
      <p>This practice lesson consists of short paragraphs about interesting subjects. Find fun keyboard typing practice—and learn something new! Our paragraph practice is great typing practice for writing essays, reports, emails, and more for school and work.</p>
      <h1>heading2</h1>
      <p>This practice lesson consists of short paragraphs about interesting subjects. Find fun keyboard typing practice—and learn something new! Our paragraph practice is great typing practice for writing essays, reports, emails, and more for school and work.</p>
      
    </>
  )
}

export default Child

export function Titletexts({title}){
    return(
        <>
        <h1>{title}</h1>
        </>
    )
}
export function Bodytexts({description}){
    return(
        <>
        <h1>{description}</h1>
        </>
    )
}
