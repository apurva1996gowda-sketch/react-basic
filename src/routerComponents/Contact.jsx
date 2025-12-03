import React from 'react'

const Contact = () => {
    const contactbox = { width: 340, height: 457, position: 'absolute', top: 170, left: 135,boxShadow:'0px 1px 13px 0px black' }
    const innerbox = { width: 270, height: 366, position: 'absolute', top: 40, left: 35, display: 'flex', flexDirection: 'column', gap: 32 }
    const topheader = { width: 1440, height: 48, backgroundColor: 'black', position: 'absolute' }
    const sendmesbox={width:800,height:457,position:'absolute',top:170,left:505,boxShadow:'0px 1px 13px 0px black'}
    const inputstyle={width:235,height:50, padding:'13px 16px',fontSize:16,backgroundColor:'#F5F5F5',border:'none'}
    const sendbutton={width:215,height:56,padding:'16px 48px',backgroundColor:'#DB4444',color:'white',fontSize:16}
    const footerbox={width:1440,height:440,position:'absolute',top:921, backgroundColor:'black'}
    return (
        <div className='body' style={{ position: 'relative' }}>
            <div style={topheader}>
                <div style={{ width: 859, height: 24, display: 'flex', gap: 231, position: 'absolute', top: 12, left: 445 }}>
                    <span style={{ fontSize: 14, color: '#FAFAFA', fontWeight: '400' }}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                    <select name="" id="" style={{ backgroundColor: 'black', color: 'white', border: 'none' }}>
                        <option value="English">English</option>
                    </select>

                </div>
            </div>
            <div style={contactbox}>
                <div style={innerbox}>
                    <div style={{ width: 262, height: 122, display: 'flex', flexDirection: 'column', gap: 24, borderBottom: '1px solid grey' }}>
                        <span style={{ fontSize: 16, fontWeight: '600' }}>Call To Us</span>
                        <span style={{ fontSize: 14, fontWeight: '400' }}>We are available 24/7, 7 days a week.</span>
                        <span style={{ fontSize: 14, fontWeight: '400' }}>Phone: +8801611112222</span>
                    </div>
                    <div style={{width:250,height:180,display:'flex',flexDirection:'column',gap:24}}>
                        <span style={{fontSize:16,fontWeight:'600'}}>Write To US</span>
                        <span style={{fontSize:14,fontWeight:'400'}}>Fill out our form and we will contact you within 24 hours.</span>
                        <span style={{fontSize:14,fontWeight:'400'}}>Emails: customer@exclusive.com</span>
                    </div>
                </div>
            </div>

            <div style={sendmesbox}>
                <div style={{width:737,height:377,position:'absolute',top:40,left:31,display:'flex',flexDirection:'column',gap:32,alignItems:'end'}}>
                    <div style={{width:737,height:50,display:'flex',gap:16}}>
                        <input type="text" placeholder='Your Name *' style={inputstyle}/>
                        <input type="text" placeholder='Your Email *' style={inputstyle}/>
                        <input type="text" placeholder='Your Phone *' style={inputstyle}/>
                    </div>
                    <textarea name="" id="" placeholder='Your Message' style={{width:737,height:207,backgroundColor:'#F5F5F5',fontSize:16}}></textarea>
                    <button style={sendbutton}>Send Message</button>
                </div>
            </div>

            <div style={footerbox}></div>

        </div>
    )
}

export default Contact
