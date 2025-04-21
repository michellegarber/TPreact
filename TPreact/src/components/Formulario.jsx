import React from "react";
import './formulario.css'
function Formulario(){
   return(
    <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2><form>
            <label>Nombre Mascota</label><input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value=""/>
            <label>Nombre Dueño</label><input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value=""/>
            <label>Fecha</label><input type="date" name="fecha" className="u-full-width" value=""/>
            <label>Hora</label><input type="time" name="hora" className="u-full-width" value=""/>
            <label>Síntomas</label><textarea name="sintomas" className="u-full-width"></textarea>
            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
          </div>
        </div>
    </div>
   );
}
export default Formulario;
