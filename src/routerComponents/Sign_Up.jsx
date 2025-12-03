import React from 'react'
import phone from '../assets/phone.jpg'

const Sign_Up = () => {
    const topheader = { width: 1440, height: 48, backgroundColor: 'black', position: 'absolute' }
    const mainbox={width:1305,height:781,display:'flex',gap:129,position:'absolute',top:200}
    const signupbox={width:371,height:530,display:'flex',flexDirection:'column', gap:48}
    const createbutton={width:371,height:56,padding:'16px 122px',backgroundColor:'#DB4444',color:'white',fontSize:16}
    const footerbox={width:1440,height:440,position:'absolute',top:1021, backgroundColor:'black'}
    return (
        <div style={{position:'relative'}}>
            <div style={topheader}>
                <div style={{ width: 859, height: 24, display: 'flex', gap: 231, position: 'absolute', top: 12, left: 445 }}>
                    <span style={{ fontSize: 14, color: '#FAFAFA', fontWeight: '400' }}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                    <select name="" id="" style={{ backgroundColor: 'black', color: 'white', border: 'none' }}>
                        <option value="English">English</option>
                    </select>

                </div>
            </div>

            <div style={mainbox}>
                <img style={{width:805,height:781}} src={phone} alt="phonead" />
                <div style={signupbox}>
                    <span style={{fontSize:36,fontWeight:600}}>Create an account</span>
                    <div style={{width:371,height:404,display:'flex',flexDirection:'column',gap:40}}>
                        <input type="text" placeholder='Name' style={{width:370,height:32,border:'none',borderBottom:'1px solid black',fontSize:16}}/>
                        <input type="text" placeholder='Email or Phone number' style={{width:370,height:32,border:'none',borderBottom:'1px solid black',fontSize:16}}/>
                        <input type="text" placeholder='Password' style={{width:370,height:32,border:'none',borderBottom:'1px solid black',fontSize:16}}/>
                        <button style={createbutton}>Create Account</button>
                    </div>
                </div>
            </div>
            <div style={footerbox}></div>
                  
        </div>
    )
}

export default Sign_Up
