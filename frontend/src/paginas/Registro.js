import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../estilos/Registro.css';

function Registro() {
    //declaramos la variable que cambia estados
    const [campos, setCampos] = useState({
        nombre_usuario:"",
        correo_electronico: "",
        contrasenia: ""
    });
    const[error,setError]=useState('');
    // redireccionamiento
    const navegacion=useNavigate();

    const registrar = (e) => {
        e.preventDefault(); //previene que se recargue la pagina cuanndo envies el formulario
        axios.post('http://localhost:8082/registro', campos)
            .then(respuesta => {
                if (respuesta.data.Estatus === "CORRECTO") {
                    navegacion('/acceso');
                } else {
                    setError(respuesta.data.Error);
                }
            })
            .catch(error => console.log("hay un error"))

    }
    return (
        <section className="uwu1">
  <div className="form-box">
    <div className="form-value">
      <form className="hp" onSubmit={registrar} action="">
        <h2>Registrar</h2>
        <div className="inputbox">
          <ion-icon name="mail-outline" />
        
        <input type='text' placeholder="Nombre" name="Nombre_usuario" onChange={(e)=>setCampos({...campos,nombre_usuario:e.target.value})} required/>
        <label htmlFor="username">Usuario:</label>
            </div>
        <div className="inputbox">
          <ion-icon name="mail-outline" />
          <input type='email' placeholder="Email" name="Correo_electronico" onChange={(e)=>setCampos({...campos,correo_electronico:e.target.value})} required/>
          <label htmlFor="username">Correo Electronico:</label>
        </div>
        <div className="inputbox">
          <ion-icon name="lock-closed-outline" />
        <input type='password' placeholder="Contraseña" name="Contrasenia" onChange={(e)=>setCampos({...campos,contrasenia:e.target.value})} required/>
        <label htmlFor="password">Contraseña:</label>
        </div>
        <button>Registrarse</button>
        <div className="register">
        <p>
            Ya tienes una cuenta? <Link to="/acceso">Iniciar Sesión</Link>
            <br /><br />
            <Link to="/">- Volver a inicio -</Link>
          </p>
        </div>
      </form>
    </div>
  </div>
</section>
        /* <div className="container">
        <form onSubmit={registrar}>
            <h2>Registrar</h2>
            <div className="form-group">
                <label htmlFor="username">Usuario:</label>
                <input type='text' placeholder="Nombre" name="Nombre_usuario" onChange={(e)=>setCampos({...campos,nombre_usuario:e.target.value})} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Correo Electronico:</label>
                <input type='email' placeholder="Email" name="Correo_electronico" onChange={(e)=>setCampos({...campos,correo_electronico:e.target.value})} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input type='password' placeholder="Contraseña" name="Contrasenia" onChange={(e)=>setCampos({...campos,contrasenia:e.target.value})} />
            </div>
            <div className="form-group">
            <button className="boton" type="submit">Registrar</button> 
            </div>
        </form>
    </div> */
    );
}

export default Registro;