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
import { itemsSideBar as itemsSideBarL } from './ambito-laboral/AmbitoLaboral'
import { itemsSideBar as itemsSideBarE } from './ambito-educativo/Ambito-Educativo'
import { itemsSideBar as itemsSideBarP} from './ambito-personal/Ambito-Personal'
import { SCOPES } from './shared/const'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <Routes>
        <Route path="/Portafolio-Personal-Cris" element={ <Contenedor itemsSideBar={itemsSideBarL} ambito={SCOPES.LABORAL}/> } />
        
        <Route path="/Portafolio-Personal-Cris/ambito-laboral" element={ <Contenedor itemsSideBar={itemsSideBarL} ambito={SCOPES.LABORAL}/> } />
        <Route path="/Portafolio-Personal-Cris/ambito-educativo" element={<div> <Contenedor itemsSideBar={itemsSideBarE} ambito={SCOPES.ACADEMICO}/> </div>} />
        <Route path="/Portafolio-Personal-Cris/ambito-personal" element={<section> <Contenedor itemsSideBar={itemsSideBarP} ambito={SCOPES.PERSONAL}/> </section>} />
        
      </Routes>
     

     <Footer/>
    </>
  )
}

export default App
