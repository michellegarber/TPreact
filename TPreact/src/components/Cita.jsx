import React from "react";
function Cita(){
   return(
    <div className="one-half column">
      <div className="cita">
        <p>Mascota: <span></span></p>
        <p>Dueño: <span></span></p>
        <p>Fecha: <span></span></p>
        <p>Hora: <span></span></p>
        <p>Sintomas: <span></span></p>
        <button className="button elimnar u-full-width">Eliminar ×</button>
      </div>
    </div>
   );
}
export default Cita;
