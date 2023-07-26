import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavBar} from './nav-bar/NavBar'
import { Footer } from './footer/Footer'
import { AmbitoLaboral } from './ambito-laboral/AmbitoLaboral'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>

     <AmbitoLaboral/>

     <Footer/>
    </>
  )
}

export default App
