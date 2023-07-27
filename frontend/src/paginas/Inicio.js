// 1-
import React from "react";
import Encabezado from "../componentes/Encabezado";
import Pie_de_pagina from "../componentes/Pie_de_pagina"
import "../estilos/Inicio.css";

// 2-
function Inicio(){
    // 3-
    return(
        <>
        <Encabezado />
        <div className="inicio-container">
      <div className="bienvenida">
        <h1>Bienvenidos a la Monkeys Store</h1>
      </div>
      <div className="contenido">
        <div className="seccion">
          <br /><br />
          <img className="img111" src={require('../imagenes/apple.png')} alt="Apple" />
          <div className="texto">
            <p>
              Aquí encontrarás todo lo que necesitas para estar a la vanguardia de la
              tecnología.
              <br />
              Estamos emocionados de tenerte como visitante y queremos que disfrutes
              de todas las novedades y dispositivos sorprendentes que tenemos para
              ofrecerte.
            </p>
          </div>
        </div>
        <div className="seccion">
          <div className="texto">
            <p>
              Explora nuestro extenso catálogo de gadgets, desde los últimos
              accesorios para teléfonos y dispositivos para el hogar inteligente y
              accesorios innovadores.
              <br />
              Estamos constantemente actualizando nuestra selección para que siempre
              encuentres lo más nuevo y emocionante en el mundo de la tecnología.
            </p>
          </div>
          <img className="img222" src={require('../imagenes/audifonosbeat.png')} alt="Audifonos" />
        </div>
      </div>
  <br /><br /><br /><br />
  </div>
  <Pie_de_pagina/>
</>
    );
}

// 4-
export default Inicio;