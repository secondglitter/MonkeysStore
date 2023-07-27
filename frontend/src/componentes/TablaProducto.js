import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../estilos/Catalogo.css";

function TablaProducto() {
  const [productos, setProductos] = useState([]);

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta categoría?")) {
      console.log(id);
      axios
        .delete(`http://localhost:8082/delproducto/${id}`)
        .then((response) => {
          // Actualizamos el estado eliminando la categoría eliminada
          setProductos(productos.filter(producto => producto.id !== id));
        })
        .catch((error) => {
          console.error("Error al eliminar la categoría", error);
        });
    }
  };


  useEffect(() => {
    axios.get('http://localhost:8082/obtenerproductos')
      .then(respuesta => {
        if (respuesta.data.mensaje === "exitoso") {
          setProductos(respuesta.data.contenido);
        } else {
          console.log("Error");
        }
        console.log(respuesta);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      {productos.map((producto) => {
        const cid = producto.id;
        return (
          <div className="card-catalogo" key={producto.id_producto} >
                              
          <div className="card-body">
              <h5 className="card-title">Producto: {producto.nombre_producto}</h5>
              <p className="card-text">Descripcion: {producto.descripcion}</p>
              <p className="card-text">Precio: {producto.precio}</p>
              <p className="card-text">Nombre de la imagen: {producto.imagenes}</p>
              <p className="card-text">Caracteristica1: {producto.caracteristica1}</p>
              <p className="card-text">Caracteristica2: {producto.caracteristica2}</p>
              <p className="card-text">Caracteristica3: {producto.caracteristica3}</p>
              <p className="card-text">Id de la categoria: {producto.IDCategorias}</p>
              
<Link to={`/admin/actualizarProducto`}>
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

export default TablaProducto;
