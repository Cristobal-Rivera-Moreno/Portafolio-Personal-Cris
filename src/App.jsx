import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavBar} from './nav-bar/NavBar'
import { Footer } from './footer/Footer'
import { Routes, Route } from "react-router-dom";
import { Contenedor } from './contenedor/Contenedor'
import { SCOPES } from './shared/const'
import { getCurrentLanguage, getString, StringId } from './strings/strings'
function App() {
  const [count, setCount] = useState(0)
  const [currLanguague, setCurrLanguage] = useState(getCurrentLanguage())

  var itemsSideBarL = [
    { icono:'📈',   texto: getString(StringId.MSG_ID_8, currLanguague)},
    { icono:'💼', texto: getString(StringId.MSG_ID_6, currLanguague) },
    { icono:'🧠', texto: getString(StringId.MSG_ID_10, currLanguague) },
    { icono:'🛠' , texto: getString(StringId.MSG_ID_11, currLanguague)}
  ] 

  var itemsSideBarE = [
    { icono:'💻', texto:getString(StringId.MSG_ID_64, currLanguague) },
    { icono:'💻', texto: getString(StringId.MSG_ID_65, currLanguague) },
    
  ]

  var itemsSideBarP = [
    { icono:'💫', texto:getString(StringId.MSG_ID_74, currLanguague) },
    { icono:'💭', texto: getString(StringId.MSG_ID_75, currLanguague) },
    { icono:'🧔' , texto: getString(StringId.MSG_ID_76, currLanguague)}
  ] 

  useEffect(() => {
    itemsSideBarL = [
      { icono:'📈',   texto: getString(StringId.MSG_ID_8, currLanguague)},
      { icono:'💼', texto: getString(StringId.MSG_ID_6, currLanguague) },
      { icono:'🧠', texto: getString(StringId.MSG_ID_10, currLanguague) },
      { icono:'🛠' , texto: getString(StringId.MSG_ID_11, currLanguague)}
    ] 
    
    itemsSideBarE = [
      { icono:'💻', texto:getString(StringId.MSG_ID_64, currLanguague) },
      { icono:'💻', texto: getString(StringId.MSG_ID_65, currLanguague) },
      
    ]

    itemsSideBarP = [
      { icono:'💫', texto:getString(StringId.MSG_ID_74, currLanguague) },
      { icono:'💭', texto: getString(StringId.MSG_ID_75, currLanguague) },
      { icono:'🧔' , texto: getString(StringId.MSG_ID_76, currLanguague)}
    ] 
  }, [currLanguague])


  return (
    <>
     <NavBar currLanguage={currLanguague} setCurrLanguage={setCurrLanguage}/>
     <Routes>
        <Route  path="/Portafolio-Personal-Cris" element={ <Contenedor itemsSideBar={itemsSideBarL} ambito={SCOPES.LABORAL} currLanguage={currLanguague}/> } />
        <Route path="/Portafolio-Personal-Cris/ambito-laboral" element={ <Contenedor itemsSideBar={itemsSideBarL} ambito={SCOPES.LABORAL} currLanguage={currLanguague}/> } />
        <Route path="/Portafolio-Personal-Cris/ambito-educativo" element={<div> <Contenedor itemsSideBar={itemsSideBarE} ambito={SCOPES.ACADEMICO} currLanguage={currLanguague}/> </div>} />
        <Route path="/Portafolio-Personal-Cris/ambito-personal" element={<section> <Contenedor itemsSideBar={itemsSideBarP} ambito={SCOPES.PERSONAL} currLanguage={currLanguague}/> </section>} />
        
      </Routes>
     

     <Footer currLanguage = {currLanguague}/>
    </>
  )
}

export default App
