import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../estilos/h.css";

function Actualizarproducto() {
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    imagenes: null,
    cart1: "",
    cart2: "",
    cart3: "",
  });
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setProducto((prevProducto) => ({ ...prevProducto, [name]: files[0] }));
    } else {
      setProducto((prevProducto) => ({ ...prevProducto, [name]: value }));
    }
  };

  const actualizarProducto = () => {
    const datosFormulario = new FormData();
    datosFormulario.append("nombre", producto.nombre);
    datosFormulario.append("descripcion", producto.descripcion);
    datosFormulario.append("precio", producto.precio);
    datosFormulario.append("imagenes", producto.imagenes);
    datosFormulario.append("cart1", producto.cart1);
    datosFormulario.append("cart2", producto.cart2);
    datosFormulario.append("cart3", producto.cart3);

    console.log(producto);
    axios
      .put(`http://localhost:8082/editarProducto/${id}`, datosFormulario)
      .then((respuesta) => {
        console.log(respuesta.data); // Muestra la respuesta del servidor en la consola
        navigate("/admin/productos"); // Redirecciona al usuario a la página de productos
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Actualizar Producto</h1>
      <form className="card1">
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Descripción:
          <textarea
            type="text"
            name="descripcion"
            onChange={handleInputChange}
          ></textarea>
        </label>
        <label>
          Precio:
          <input type="number" name="precio" onChange={handleInputChange} />
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
          Caracteristica1:
          <input
            type="text"
            name="cart1"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Caracteristica2:
          <input
            type="text"
            name="cart2"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Caracteristica3:
          <input
            type="text"
            name="cart3"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Id:
          <textarea value={id} onChange={(e) => setId(e.target.value)}></textarea>
        </label>
        <button className="sunza" type="button" onClick={actualizarProducto}>
          Actualizar
        </button>
      </form>
    </>
  );
}

export default Actualizarproducto;