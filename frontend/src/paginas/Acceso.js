import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../estilos/Acceso.css';

function Acceso() {
  // Declaring the state variables
  const [campos, setCampos] = useState({
    correo_electronico: "",
    contrasenia: ""
  });
  const [error, setError] = useState('');

  // Redirecting user
  const navegacion = useNavigate();

  // Function to handle form submission
  const acceder = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8082/acceso', campos)
      .then(respuesta => {
        if (respuesta.data.Estatus === "CORRECTO") {
          localStorage.setItem('usuario', JSON.stringify(respuesta.data)); // Saving data as a string in localStorage
          navegacion('/'); // Redirect to '/' after successful login
        } else {
          setError(respuesta.data.Error);
        }
      })
      .catch(error => console.log("hay un error"));
  }

  return (
    <section className="uwu">
      <div className="form-box">
        <div className="form-value">
          <form className="hp" onSubmit={acceder}>
            <h2>Iniciar Sesión</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline" />
              <input type='email' placeholder="Email" name="Correo_electronico" onChange={(e) => setCampos({ ...campos, correo_electronico: e.target.value })} required />
              <label htmlFor="username">Correo Electronico:</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline" />
              <input type='password' placeholder="Contraseña" name="Contrasenia" onChange={(e) => setCampos({ ...campos, contrasenia: e.target.value })} required />
              <label htmlFor="password">Contraseña:</label>
            </div>
            <button type="submit">Ingresar</button>
            <div className="register">
              <p>
                No tienes una cuenta? <Link to="/registro">Registrate</Link>
              </p>
              <p>
                 <Link to="/">- Regresar al Inicio -</Link>
              </p>
              
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Acceso;