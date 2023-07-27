// 1-
import React from "react";
import EncabezadoDashboard from "../componentes/EncabezadoDashboard";
import TablaUsuario from "../componentes/TablaUsuarios";
import Footer from "../componentes/Pie_de_pagina";


// 2-
function TablaUsuarioDashboard(){
    // 3-
    return(
        <>
        <EncabezadoDashboard/>
        <br></br>
        <h1 className="centrarcategorias">Usuarios</h1>
        <br></br><br></br><br></br>
      <TablaUsuario/>
      <br></br><br></br><br></br><br></br><br></br>
  <Footer/>
</>
    );
}

// 4-

export default TablaUsuarioDashboard;