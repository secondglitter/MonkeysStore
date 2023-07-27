import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../estilos/h.css";

function UsuarioCreate() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");
  const navigate = useNavigate();

  const crearUsuario = () => {
    console.log(nombre + correo + contra);

    // Check if required fields are filled
    if (!nombre || !correo || !contra) {
      console.log("Por favor, complete todos los campos obligatorios.");
      return;
    }

    axios
      .post("http://localhost:8082/crearUsuario", {
        nombre,
        correo,
        contra,
      })
      .then((respuesta) => {
        if (respuesta.data.Estatus === "exitoso") {
          navigate("/admin/usuarios");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Crear Nuevo Usuario</h1>
      <form className="card1">
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required/>
        </label>
        <label>
          correo electronico:
          <input
            type="text"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required/>
        </label>
        <label>
          Contraseña:
          <input
            type="text"
            value={contra}
            onChange={(e) => setContra(e.target.value)}
            required/>
        </label>
        <button className="sunza" type="button" onClick={crearUsuario}>
          Guardar
        </button>
      </form>
    </>
  );
}

export default UsuarioCreate;
