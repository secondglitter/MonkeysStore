import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../estilos/h.css";

function Actualizarcategoria() {
  const [categoria, setCategoria] = useState({
    nombre: "",
    descripcion: "",
    imagenes: null,
  });
  const [id, setId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const idCategoria = localStorage.getItem("id");
    axios
      .get(`http://localhost:8082/obtenercategoria/${idCategoria}`)
      .then((respuesta) => {
        if (respuesta.data.mensaje === "exitoso") {
          setCategoria(respuesta.data.contenido[0]);
        } else {
          console.log("Error");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setCategoria((prevCategoria) => ({ ...prevCategoria, [name]: files[0] }));
    } else {
      setCategoria((prevCategoria) => ({ ...prevCategoria, [name]: value }));
    }
  };

  const ActualizarCategoria = () => {
    const { nombre, descripcion, imagenes } = categoria;
    const datosFormulario = new FormData();
    datosFormulario.append("nombre", nombre);
    datosFormulario.append("descripcion", descripcion);
    datosFormulario.append("imagenes", imagenes);

    axios
      .put(`http://localhost:8082/editarCategoria/${id}`, datosFormulario)
      .then((respuesta) => {
        console.log(respuesta.data);
        navigate("/admin/categorias", { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Actualizar Categoria</h1>
      <form className="card1">
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            defaultValue={categoria.nombre_categoria}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Descripción:
          <textarea
            type="text"
            name="descripcion"
            defaultValue={categoria.descripcion}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Nombre de la Imagen:
          <input
            type="file"
            name="imagenes"
            accept="image/*"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Id:
          <textarea
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <button className="sunza" type="button" onClick={ActualizarCategoria}>
          Actualizar
        </button>
      </form>
    </>
  );
}

export default Actualizarcategoria;
