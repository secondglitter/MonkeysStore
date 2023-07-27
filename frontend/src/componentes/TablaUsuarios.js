import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../estilos/Catalogo.css";
import { dataContext } from "./Context/DataContext"; // Importa tu contexto aquí

function TablaUsuarios() {
  const { usuario, setUsuario } = useContext(dataContext); // Obtiene el usuario y la función setUsuario desde el contexto
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/obtenerusuarios')
      .then(response => {
        if (response.data.mensaje === "exitoso") {
          setUsuarios(response.data.contenido);
        } else {
          console.log("Error");
        }
        console.log(response);
      })
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      console.log(id);
      axios.delete(`http://localhost:8082/delusuario/${id}`)
        .then(() => {
          // Si el usuario eliminado es el mismo que el usuario logueado actualmente, cierra la sesión
          if (usuario && usuario.id_usuario === id) {
            setUsuario(null);
            localStorage.removeItem("usuario"); // Opcionalmente, puedes eliminar los datos del usuario del localStorage
          }
          setUsuarios(usuarios.filter(usuario => usuario.id_usuario !== id));
        })
        .catch((error) => {
          console.error("Error al eliminar el usuario", error);
        });
    }
  };

  return (
    <>
      {usuarios.map((usuario) => {
        const uid = usuario.id_usuario;
        return (
          <div className="card-catalogo" key={usuario.id_usuario}>
            <div className="card-body">
              <h5 className="card-title">Usuario: {usuario.nombre_usuario}</h5>
              <p className="card-text">Correo: {usuario.correo_electronico}</p>
              <p className="card-text">Contraseña: {usuario.contrasenia}</p>
              <Link to={`/admin/actualizarUsuario`}>
                <button class="btn btn-primary">Editar</button>
              </Link>
              <br /><br />
              <button class="btn btn-primary" onClick={() => handleDelete(uid)}>Eliminar</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TablaUsuarios;
