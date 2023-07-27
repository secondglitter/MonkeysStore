// ARCHIVO RENOMBRADO COMO Productos.js

// 1-
import React from "react";
import Encabezado from "../componentes/Encabezado";
import Pie_de_pagina from "../componentes/Pie_de_pagina"
import "../estilos/Lista.css";
import Producto from "../componentes/Producto";

// 2-
function Lista() {
  // 3-
  return (
    <>
      <Encabezado />
      <br></br>
      <div className="seccion">
      <h1 className="centrarlista">Conoce nuestros productos</h1>
      </div>
      <br></br>
      <Producto />
      <Pie_de_pagina />
    </>
  );
}

// 4-
export default Lista;