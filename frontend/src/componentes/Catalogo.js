import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../estilos/Catalogo.css"
import { Link } from 'react-router-dom';
import FlechaArriba from "./FlechaScroll";

function Catalogo() {
    const [Categorias, setCategorias] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8082/obtenercategorias')
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
        <FlechaArriba/>
            {Categorias.map((Categoria, index) => {
                return <>
                    <div className="card-catalogo" key={Categoria.id_categorias} >
                        <img src={require('../imagenes/'+Categoria.imagenes)} alt="Nombre del producto" />
                        <div className="card-body-catalogo">
                            <h5 className="card-title">{Categoria.nombre_categoria}</h5>
                            <p className="card-texto-catalogo">{Categoria.descripcion}</p>
                            <Link to={"/filtro/"+ Categoria.nombre_categoria}><button class="btn-primary-catalogo card-texto-catalogo">Ir a {Categoria.nombre_categoria}</button> </Link>
                        </div>
                    </div>
                </>
            })}
        </>
    );

}
export default Catalogo;