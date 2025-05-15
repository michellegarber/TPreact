import React from "react";
import './formulario.css'
import { useState } from 'react';


export function Formulario(){

    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');
  
    return (
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form>
              <label>Nombre Mascota</label>
              <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
                value={mascota || ""}
                onChange={(e) => setMascota(e.target.value)}
              />
  
              <label>Nombre Dueño</label>
              <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre dueño de la mascota"
                value={propietario}
                onChange={(e) => setPropietario(e.target.value)}
              />
  
              <label>Fecha</label>
              <input
                type="date"
                name="fecha"
                className="u-full-width"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
  
              <label>Hora</label>
              <input
                type="time"
                name="hora"
                className="u-full-width"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              />
  
              <label>Síntomas</label>
              <textarea
                name="sintomas"
                className="u-full-width"
                value={sintomas}
                onChange={(e) => setSintomas(e.target.value)}
              ></textarea>
  
              <button type="submit" className="u-full-width button-primary">
                Agregar Cita
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  

   
