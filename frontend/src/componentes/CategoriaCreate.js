import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../estilos/h.css";

function CategoriaCreate() {
  const [categoria, setCategoria] = useState({
    nombre: "",
    descripcion: "",
    imagenes: null,
  });

  const navigate = useNavigate();

  const crearCategoria = () => {
    const datosFormulario = new FormData();
    datosFormulario.append("nombre", categoria.nombre);
    datosFormulario.append("descripcion", categoria.descripcion);
    if (categoria.imagenes) {
      datosFormulario.append("imagenes", categoria.imagenes);
    }

    console.log(categoria);
    axios
      .post("http://localhost:8082/crearCategoria", datosFormulario)
      .then((respuesta) => {
        console.log(respuesta.data); // Muestra la respuesta del servidor en la consola
        navigate("/admin/categorias"); // Redirecciona al usuario a la página de productos
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Crear Nueva Categoría</h1>
      <form className="card1">
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={categoria.nombre}
            onChange={(e) => setCategoria({ ...categoria, nombre: e.target.value })}
            required
          />
        </label>
        <label>
          Descripción:
          <textarea
            name="descripcion"
            value={categoria.descripcion}
            onChange={(e) => setCategoria({ ...categoria, descripcion: e.target.value })}
            required
          ></textarea>
        </label>
        <label>
          Nombre de la Imagen:
          <input
            type="file"
            name="imagenes"
            accept="image/*"
            onChange={(e) => setCategoria({ ...categoria, imagenes: e.target.files[0] })}
          />
        </label>
        <button className="sunza" type="button" onClick={crearCategoria}>
          Guardar
        </button>
      </form>
    </>
  );
}

export default CategoriaCreate;