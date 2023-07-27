import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../estilos/h.css";


function Actualizarusuario() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contra, setContra] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

  const ActualizarUsuario = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8082/editarUsuario/${id}`, {
        nombre,
        correo,
        contra,
      id,
      }) // Enviar el nombre de la imagen al servidor
      .then((respuesta) => {
        if (respuesta.data.Estatus === "exitoso") {
          navigate("/admin/usuarios");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
    <h1>Editar usuario</h1>
    <form className="card1" onSubmit={ActualizarUsuario}>
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
      <label>
          Id:
          <textarea
            value={id}
            onChange={(e) => setId(e.target.value)}
            required></textarea>
        </label>
      <button className="sunza">
        Guardar
      </button>
    </form>
    </>
  );
}

export default Actualizarusuario;