import React from 'react';
import './Cita.css';

export default function Cita({ cita, index, eliminarCita }) {
  return (
    <div className="cita">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.propietario}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Síntomas: <span>{cita.sintomas}</span></p>
      <button className="button eliminar" onClick={() => eliminarCita(index)}>
        Eliminar &times;
      </button>
    </div>
  );
}
