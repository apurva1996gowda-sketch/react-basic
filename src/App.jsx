import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Home from './routerComponents/Home'
import Contact from './routerComponents/Contact'
import About from './routerComponents/About'
import Sign_Up from './routerComponents/Sign_Up'
import './App.css'
import MUIexcercise3 from './MUIpractice/MUIexcercise1/MUIexcercise3'
import APICRUD from './components/APIintegration/APICRUD'
import APICRUDprofiles from './components/APIintegration/APICRUDprofiles'
import APICRUDposts from './components/APIintegration/APICRUDposts'
import APICRUDtest from './components/APIintegration/APICRUDtest'
import CounterApp from './Simple Projects/CounterApp'
import PracticeReact, { PracticeReact1, PracticeUseState } from './Simple Projects/PracticeReact'
import CounterAppnew from './Redux/CounterApp'
import APIforUsers from './Simple Projects/APIforUsers'
import APIforProducts from './Simple Projects/APIforProducts'


// const LazyComponent=lazy(()=>import('./components/performanceoptimization/UseCallbackparent'))


function App() {
  const linkstyle = { color: "black", textDecoration: "none" }
  return (
    <>
      {/* <div style={{height:600, display:'flex',justifyContent:'center',alignItems:'center'}}> */}
      {/* <PracticeUseState></PracticeUseState> */}
      {/* <CounterAppnew></CounterAppnew> */}
      <APIforUsers></APIforUsers><br />
      {/* <APIforProducts></APIforProducts> */}
      {/* <APICRUDtest></APICRUDtest> */}
      {/* <CounterApp></CounterApp> */}
      {/* </div> */}













      {/* <Suspense>
        <LazyComponent></LazyComponent>
      </Suspense> */}

      {/* <div style={{position:'relative'}}>
        <Router>
          <div style={{display:'flex',gap:148 , position:'absolute', marginLeft: 125, marginTop: 55,width:1168,height:38,alignItems:'center'}}>
            <Link style={linkstyle} to={'/'}><span style={{fontSize:24,fontWeight:"700" }}>Vezza</span></Link>
            <nav style={{ display: "flex", gap: 50, fontSize:16}}>
              <Link style={linkstyle} to={'/'}>Home</Link>
              <Link style={linkstyle} to={'/contact'}>Contact</Link>
              <Link style={linkstyle} to={'/about'}>About</Link>
              <Link style={linkstyle} to={'/signup'}>Sign Up</Link>
            </nav>
            <input type="search" placeholder='what are you searching for?'style={{width:243,height:38,fontSize:12,padding:5}} />
          </div>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/signup' element={<Sign_Up></Sign_Up>}></Route>
          </Routes>
        </Router>
      </div> */}
    </>

  )
}

export default App
