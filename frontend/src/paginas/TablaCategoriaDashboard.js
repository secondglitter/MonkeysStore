// 1-
import React from "react";
import EncabezadoDashboard from "../componentes/EncabezadoDashboard";
import TablaCategoria from "../componentes/TablaCategoria";
import Footer from "../componentes/Pie_de_pagina";


// 2-
function TablaCategoriaDashboard(){
    // 3-
    return(
        <>
        <EncabezadoDashboard/>
        <br></br>
        <h1 className="centrarcategorias">Categorias</h1>
        <br></br><br></br><br></br>
      <TablaCategoria/>
      <br></br><br></br><br></br><br></br><br></br>
  <Footer/>
</>
    );
}

// 4-

export default TablaCategoriaDashboard;