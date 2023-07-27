import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../estilos/Gaming.css"
import { Link,useParams } from 'react-router-dom';

function Gaming() {
    const [Gamings, setCategorias] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8082/filtrarcategoria/${id}`)
            .then(respuesta => {
                if (respuesta.data.mensaje === "exitoso") {
                    setCategorias(respuesta.data.contenido);
                    //console.log(repuesta.data);
                } else {
                    console.log("Error");
                }
                console.log(respuesta);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <>
            {Gamings.map((Gaming, index) => {

                return <>
                <div className="card-gaming" key={Gaming.ID} >
                <div className="card-texto-gaming">
                    <img src={require('../imagenes/'+Gaming.imagen)} alt="Nombre del producto" />
                    
                        <h5>{Gaming.productos}</h5>
                        <p>${Gaming.precio} MXN</p>
                        <Link to={"/detalles/"+ Gaming.ID}><button class="btn-primary-gaming ">Ir al producto</button> </Link>
                        </div>
                    </div>
            </>
            })}
        </>
    );

}
export default Gaming;