import './App.css'
import { useState } from 'react';
import Formulario from './components/Formulario.jsx'
import Listado from './components/Listado.jsx'

function App() {
  const [citas, setCitas] = useState([]);

  const eliminarCita = (index) => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    setCitas(nuevasCitas);
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"/>
      <div className='general'>
        <div id="root">
          <h1>ADMINISTRADOR DE PACIENTES</h1>
          <Formulario setCitas={setCitas} citas={citas} />
          <Listado citas={citas} eliminarCita={eliminarCita} />
        </div>
      </div>
    </>
  );
}

export default App;
