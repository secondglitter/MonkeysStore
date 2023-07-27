import React, { useContext } from "react";
import "../estilos/Producto.css";
import { Link } from 'react-router-dom';
import { dataContext } from "./Context/DataContext";
import Encabezado from "./Encabezado";
import Footer from "./Pie_de_pagina";
import FlechaArriba from "./FlechaScroll";

const Producto = () => {
  const { productos, buyProducts } = useContext(dataContext);

  const mostrarMensaje = (nombreProducto) => {
    alert(`Se agregó correctamente "${nombreProducto}" al carrito`);
  };

  return (
    <>
    <FlechaArriba/>
    <Encabezado/>
    <div className="producto-container">
      {productos.map((producto) => (
        <div className="card-img" key={producto.id}>
          <img src={require('../imagenes/' + producto.imagenes)} alt="Nombre del producto" />
          <div className="card-body-img">
            <h5 className="card-title-img">{producto.nombre_producto}</h5>
            <p className="card-text">${producto.precio} MXN</p>
            <Link to={"/detalles/" + producto.id}>
              <button className="btn btn-primary">Ir al producto</button>
            </Link>
            <br />
            <br />
            <button onClick={() => { buyProducts(producto); mostrarMensaje(producto.nombre_producto); }} className="btn btn-primary">Agregar al Carrito</button>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default Producto;
