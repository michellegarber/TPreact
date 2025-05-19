import React from 'react';
import './Listado.css';
import Cita from './Cita';

export default function Listado({ citas, eliminarCita }) {
  return (
    <div>
      <h2>Listado de Citas</h2>
      {citas.length === 0 ? (
        <p>No hay citas</p>
      ) : (
        citas.map((cita, index) => (
          <Cita key={index} cita={cita} index={index} eliminarCita={eliminarCita} />
        ))
      )}
    </div>
  );
}
