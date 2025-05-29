import './App.css';
import {useState, useEffect} from 'react';
import Formulario from './components/Formulario.jsx';
import Listado from './components/Listado.jsx';

function App() {
  const citasIniciales = JSON.parse(localStorage.getItem('citas')) || [];

  const [citas, setCitas] = useState(citasIniciales);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));

  }, [citas]);

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
