import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavBar} from './nav-bar/NavBar'
import { Footer } from './footer/Footer'
import { AmbitoLaboral } from './ambito-laboral/AmbitoLaboral'
import { Routes, Route } from "react-router-dom";
import { Contenedor } from './contenedor/Contenedor'
import { AmbitoEducativo } from './ambito-educativo/Ambito-Educativo'
import { AmbitoPersonal } from './ambito-personal/Ambito-Personal'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <Routes>
        <Route path="//Portafolio-Personal-Cris" element={ <AmbitoLaboral /> } />
        
        <Route path="/Portafolio-Personal-Cris/ambito-laboral" element={ <AmbitoLaboral /> } />
        <Route path="/Portafolio-Personal-Cris/ambito-educativo" element={ <AmbitoEducativo /> } />
        <Route path="/Portafolio-Personal-Cris/ambito-personal" element={ <AmbitoPersonal /> } />
        
      </Routes>
     

     <Footer/>
    </>
  )
}

export default App
