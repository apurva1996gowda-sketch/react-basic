import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import reacthome1 from '../assets/reacthome1.jpg'
import game from '../assets/game.png'

const Home = () => {
    const navigation=useNavigate();
    function navigateto(){
        navigation('/about')
    }
    const homemenu={width:142,height:344, display:"flex",flexDirection:"column",gap:16}
    const flashrow={width:1308,height:350,display:'flex',gap:30}
    const flashcol1={width:270,height:322,display:'flex',flexDirection:'column',gap:16}
    const viewall={width:234,height:56,position:'absolute',top:1219,left:603,padding:'16px 48px',backgroundColor:'red',color:'white',fontSize:16}
    const footerbox={width:1440,height:440,position:'absolute',top:1821, backgroundColor:'black'}
    return (
    <div className='body' style={{position:'relative'}}>

    <div style={{display:'flex',gap:100, position:'absolute',top:182,left:135}}>
    <div style={homemenu}>
        <span>Women's Fashion</span>
        <span>Men's Fashion</span>
        <span>Electronics</span>
        <span>Home & Lifestyle</span>
        <span>Medicine</span>
        <span>Sports & Outdoor</span>
        <span>Baby's & Toys</span>
        <span>Groceries & Pets</span>
        <span>Health & Beauty</span>
    </div>
    <img style={{width:892,height:344}} src={reacthome1} alt="mobile ad" />
    </div>

    <div style={{width:1308,height:506,position:'absolute',top:666,left:135,display:'flex',flexDirection:'column',gap:40}}>
        <div style={{width:211,height:116,fontSize:36,fontWeight:'600'}}>Flash Sale</div>
        <div style={flashrow}>
            <div style={flashcol1}>
                <img style={{width:250,height:250}} src={game} alt="gameimage" />
                <div style={{width:201,height:56,display:'flex',flexDirection:'column',gap:8}}>
                    <span style={{fontSize:16,fontWeight:500}}>HAVIT HV-G92 Gamepad</span>
                    <div style={{display:'flex',gap:10}}>
                        <span style={{color:'red',fontSize:16}}>$120</span>
                        <span style={{opacity:'0.5'}}>$160</span>
                    </div>

                </div>
            </div>

            <div style={flashcol1}>
                <img style={{width:250,height:250}} src={game} alt="gameimage" />
                <div style={{width:201,height:56,display:'flex',flexDirection:'column',gap:8}}>
                    <span style={{fontSize:16,fontWeight:500}}>HAVIT HV-G92 Gamepad</span>
                    <div style={{display:'flex',gap:10}}>
                        <span style={{color:'red',fontSize:16}}>$120</span>
                        <span style={{opacity:'0.5'}}>$160</span>
                    </div>

                </div>
            </div>

            <div style={flashcol1}>
                <img style={{width:250,height:250}} src={game} alt="gameimage" />
                <div style={{width:201,height:56,display:'flex',flexDirection:'column',gap:8}}>
                    <span style={{fontSize:16,fontWeight:500}}>HAVIT HV-G92 Gamepad</span>
                    <div style={{display:'flex',gap:10}}>
                        <span style={{color:'red',fontSize:16}}>$120</span>
                        <span style={{opacity:'0.5'}}>$160</span>
                    </div>

                </div>
            </div>

            <div style={flashcol1}>
                <img style={{width:250,height:250}} src={game} alt="gameimage" />
                <div style={{width:201,height:56,display:'flex',flexDirection:'column',gap:8}}>
                    <span style={{fontSize:16,fontWeight:500}}>HAVIT HV-G92 Gamepad</span>
                    <div style={{display:'flex',gap:10}}>
                        <span style={{color:'red',fontSize:16}}>$120</span>
                        <span style={{opacity:'0.5'}}>$160</span>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <button style={viewall}>View All Products</button>
    <div style={footerbox}></div>
    </div>
  )
}

export default Home
