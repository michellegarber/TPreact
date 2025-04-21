import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cita from './components/cita.jsx'
import Formulario from './components/formulario.jsx'
import Listado from './components/Listado.jsx'

function App() {
  
  return (
    <>
    <div id="root">
    <h1>ADMINISTRADOR DE PACIENTES</h1>
    <Formulario/> 
    <Listado/>
    </div>
    </>
  )
}

export default App
