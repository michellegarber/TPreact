import './App.css'
import Cita from './components/cita.jsx'
import {Formulario} from './components/formulario.jsx'
import Listado from './components/Listado.jsx'
import React, { useState } from 'react';

function App() {

  const[Citas, setCitas] = useState([]);

  return (
    <>
    

      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <Formulario setCitas={setCitas}></Formulario> 
      <Listado citas={Citas} setCitas={setCitas}></Listado>

    </>
  )
}

export default App
