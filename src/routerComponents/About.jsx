import React from 'react'
import about from '../assets/about.jpg'

const About = () => {
    const storybox = { width: 525, height: 336, position: 'absolute', top: 122, left: 135, display: 'flex', flexDirection: 'column', gap: 40 }
    const topheader = { width: 1440, height: 48, backgroundColor: 'black', position: 'absolute' }
    const image={width:705,height:609}
    const imagebox={width:705,height:609,position:'absolute',top:145,left:735,backgroundColor:'#EB7EA8'}
    const employeebox={width:1170,height:564,display:'flex',gap:30,position:'absolute',left:135,top:1404,border:'1px solid black'}
    const footerbox={width:1440,height:440,position:'absolute',top:2321, backgroundColor:'black'}

    return (
        <div style={{ position: 'relative' }}>
            <div style={topheader}>
                <div style={{ width: 859, height: 24, display: 'flex', gap: 231, position: 'absolute', top: 12, left: 445 }}>
                    <span style={{ fontSize: 14, color: '#FAFAFA', fontWeight: '400' }}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                    <select name="" id="" style={{ backgroundColor: 'black', color: 'white', border: 'none' }}>
                        <option value="English">English</option>
                    </select>

                </div>
            </div>

            <div style={storybox}>
                <h3 style={{ fontSize: 54, fontWeight: '600' }}>Our Story</h3>
                <div style={{width:525,height:232,display:'flex',flexDirection:'column',gap:24}}>
                <p style={{ fontSize: 16 }}>Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <p style={{ fontSize: 16 }}>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
            </div>

            <div style={imagebox}>
            <img  style={image} src={about} alt="" />
            </div>

            <div style={employeebox}></div>
            <div style={footerbox}></div>
        </div>
    )
}

export default About
