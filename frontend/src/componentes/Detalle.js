import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import "../estilos/Detalles.css";
import { useParams } from "react-router-dom";
import { dataContext } from "../componentes/Context/DataContext";
import BotonPayPal from "../componentes/PayPal/BotonPayPal";

function Detalle() {
    const { productos, buyProducts } = useContext(dataContext);
    const [Detalles, setCategorias] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8082/obtenerdetalles/${id}`)
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

    const mostrarMensaje = (nombreProducto) => {
        alert(`Se agregó correctamente "${nombreProducto}" al carrito`);
    };

    return (
        <>
            {Detalles.map((Detalle, index) => (
                <div className="detalle-container">
                <main key={index}>
                    <div className="detalle-1 detalle-2">
                        <article className="prod">
                            <img src={require('../imagenes/' + Detalle.imagenes)} alt="imagen del producto" />
                            <br />
                            <ul>
                                <li>{Detalle.caracteristica1}</li>
                                <li>{Detalle.caracteristica2}</li>
                                <li>
                                    {Detalle.caracteristica3}
                                </li>
                            </ul>
                        </article>
                        <article className="prod">
                            <p>
                                {Detalle.nombre_producto}
                            </p>
                            <br />
                            <p>
                                Descripcion del producto:
                                <br />
                                {Detalle.descripcion}
                            </p>
                            <br />
                            <hr />
                            <br />
                            <p>Precio: ${Detalle.precio} MXN</p>
                            <br />
                            <p>
                                Comprar Ahora : <BotonPayPal precio={Detalle.precio}/>
                            </p>
                            {/* Pasamos el nombre del producto como argumento a la función mostrarMensaje */}
                            <button onClick={() => {buyProducts(Detalle); mostrarMensaje(Detalle.nombre_producto);}} className="bt-detalle detalle-1">
                                Agregar al Carrito
                            </button>
                        </article>
                    </div>
                </main>
                </div>
            ))}
        
        </>
    );
}

export default Detalle;
