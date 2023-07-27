import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../estilos/Catalogo.css";

function TablaCategoria() {
  const [categorias, setCategorias] = useState([]);

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta categoría?")) {
      console.log(id);
      axios
        .delete(`http://localhost:8082/delcategoria/${id}`)
        .then((response) => {
          // Actualizamos el estado eliminando la categoría eliminada
          setCategorias(categorias.filter(categoria => categoria.id !== id));
        })
        .catch((error) => {
          console.error("Error al eliminar la categoría", error);
        });
    }
  };

  useEffect(() => {
    axios.get('http://localhost:8082/obtenercategorias')
      .then(respuesta => {
        if (respuesta.data.mensaje === "exitoso") {
          setCategorias(respuesta.data.contenido);
        } else {
          console.log("Error");
        }
        console.log(respuesta);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      {categorias.map((categoria) => {
        const cid = categoria.id;
        return (

          <div className="card-catalogo" key={categoria.id_categorias} >

            <div className="detalle-conteiner">
              <h5 className="card-title">Categoria: {categoria.nombre_categoria}</h5>
              <p className="card-text">Descripcion: {categoria.descripcion}</p>

              <p className="card-text">Nombre de la imagen: {categoria.imagenes}</p>


              <Link to={`/admin/actualizarCategoria`}>
                <button class="btn btn-primary">Editar</button>
              </Link>
              <br /><br />

              <button class="btn btn-primary" onClick={() => handleDelete(cid)}>Eliminar</button>

            </div>
          </div>
        );
      })}
    </>
  );
}

export default TablaCategoria;
