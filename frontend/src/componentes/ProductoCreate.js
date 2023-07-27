import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../estilos/h.css";

function ProductoCreate() {
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    imagenes: null,
    cart1: "",
    cart2: "",
    cart3: "",
    id_categoria_id: "",
  });

  const navigate = useNavigate();

  const crearProducto = () => {
    const datosFormulario = new FormData();
    datosFormulario.append("nombre", producto.nombre);
    datosFormulario.append("descripcion", producto.descripcion);
    datosFormulario.append("precio", producto.precio);
    datosFormulario.append("cart1", producto.cart1);
    datosFormulario.append("cart2", producto.cart2);
    datosFormulario.append("cart3", producto.cart3);
    datosFormulario.append("id_categoria_id", producto.id_categoria_id);
    if (producto.imagenes) {
      datosFormulario.append("imagenes", producto.imagenes);
    }

    console.log(producto);
    axios
      .post("http://localhost:8082/crearProducto", datosFormulario)
      .then((respuesta) => {
        console.log(respuesta.data); // Muestra la respuesta del servidor en la consola
        navigate("/admin/productos"); // Redirecciona al usuario a la página de productos
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Crear Nuevo Producto</h1>
      <form className="card1">
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={producto.nombre}
            onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
            required
          />
        </label>
        <label>
          Descripción:
          <textarea
            name="descripcion"
            value={producto.descripcion}
            onChange={(e) => setProducto({ ...producto, descripcion: e.target.value })}
            required
          ></textarea>
        </label>
        <label>
          Precio:
          <input
            type="number"
            name="precio"
            value={producto.precio}
            onChange={(e) => setProducto({ ...producto, precio: e.target.value })}
            required
          />
        </label>
        <label>
          Nombre de la Imagen:
          <input
            type="file"
            name="imagenes"
            accept="image/*"
            onChange={(e) => setProducto({ ...producto, imagenes: e.target.files[0] })}
          />
        </label>
        <label>
          Caracteristica1:
          <input
            type="text"
            name="cart1"
            value={producto.cart1}
            onChange={(e) => setProducto({ ...producto, cart1: e.target.value })}
          />
        </label>
        <label>
          Caracteristica2:
          <input
            type="text"
            name="cart2"
            value={producto.cart2}
            onChange={(e) => setProducto({ ...producto, cart2: e.target.value })}
          />
        </label>
        <label>
          Caracteristica3:
          <input
            type="text"
            name="cart3"
            value={producto.cart3}
            onChange={(e) => setProducto({ ...producto, cart3: e.target.value })}
          />
        </label>
        <label>
          Id de la categoria:
          <input
            type="text"
            name="id_categoria_id"
            value={producto.id_categoria_id}
            onChange={(e) => setProducto({ ...producto, id_categoria_id: e.target.value })}
          />
        </label>
        <button className="sunza" type="button" onClick={crearProducto}>
          Guardar
        </button>
      </form>
    </>
  );
}

export default ProductoCreate;
