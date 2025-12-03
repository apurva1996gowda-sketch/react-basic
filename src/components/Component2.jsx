import './Component2.css'

export function Header(){
    return(
        <h1 style={{backgroundColor:'violet'}}>My website header</h1>
    )
}
// used inline CSS 
// properties written in camelCase ex:backgroundColor,fontSize,   must wrapped in {{}},  seperated by comma
//  and css property values must be inside quotes

export function Footer(){
    return(
        <h4>This is the footer</h4>
    )
}
// used external CSS, no changes in writing css but we need to import the .css file to the required file

export function Box(){
    const box={
        backgroundColor:"red",

    }
    return(
        <>
        <div style={box}>hello</div>
        <h1 style={box}>Welcome</h1>
        </>
    )
}
// used style object in JS to apply CSS for div using style attribute. CSS properties, values,seperated 
// by comma every thing same as inline but we decalare a variable with style object in JS and use that 
// inside style attribute.also we can reuse that variable for other element within component