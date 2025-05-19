import React, { useState } from "react";
import './Formulario.css'

export default function Formulario({ setCitas, citas }) {
  const [form, setForm] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(form).some(field => field.trim() === '')) return;

    setCitas([...citas, form]);

    // Reiniciar formulario
    setForm({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <h2>Crear mi Cita</h2>
          <form onSubmit={handleSubmit}>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={form.mascota} onChange={handleChange} />

            <label>Nombre Dueño</label>
            <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={form.propietario} onChange={handleChange} />

            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width" value={form.fecha} onChange={handleChange} />

            <label>Hora</label>
            <input type="time" name="hora" className="u-full-width" value={form.hora} onChange={handleChange} />

            <label>Síntomas</label>
            <textarea name="sintomas" className="u-full-width" value={form.sintomas} onChange={handleChange}></textarea>

            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
          </form>
        </div>
      </div>
    </div>
  );
}
