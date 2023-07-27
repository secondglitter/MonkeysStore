// 1-
import React from "react";
import TablaProducto from "../componentes/TablaProducto";
import EncabezadoDashboard from "../componentes/EncabezadoDashboard";
import Footer from "../componentes/Pie_de_pagina";


// 2-
function TablaProductoDashboard(){
    // 3-
    return(
        <>
        <EncabezadoDashboard/>
        <br></br>
        <h1 className="centrarcategorias">Productos</h1>
        <br></br><br></br><br></br>
      <TablaProducto/>
      <br></br><br></br><br></br><br></br><br></br>
  <Footer/>
</>
    );
}

// 4-

export default TablaProductoDashboard;