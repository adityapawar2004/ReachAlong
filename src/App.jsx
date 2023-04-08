import React from 'react'
import Landpage from './components/Landpage'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <div style={{ height: "100vh", backgroundImage: 'url("https://unbounce.com/photos/Gradient-Background.png")', backgroundRepeat: "no-repeat", width: "100vw", backgroundSize: "cover", }}>
      {/* <Home /> */}
      <Routes>

        <Route exact path='/' element={<Landpage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
    
      </Routes> 
    </div>
  )
}
