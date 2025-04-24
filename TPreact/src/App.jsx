import './App.css'
import Cita from './components/cita.jsx'
import Formulario from './components/formulario.jsx'
import Listado from './components/Listado.jsx'



function App() {
  
  return (
    <>
    <script src="/static/js/bundle.js"></script>
    <script src="/static/js/vendors~main.chunk.js"></script>
    <script src="/static/js/main.chunk.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"/>
    
    <div className='general'>
       <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <Formulario/> 
      <Listado/>
      </div>
      </div>
    </>
  )
}

export default App
