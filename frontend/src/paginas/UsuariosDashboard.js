// 1-
import React from "react";
import EncabezadoDashboard from "../componentes/EncabezadoDashboard";
import Pie_de_paginaDashboard from "../componentes/Pie_de_paginaDashboard"
import UsuarioCreate from "../componentes/UsuarioCreate";


// 2-
function UsuarioDashboard(){
    // 3-
    return(
        <>
        <EncabezadoDashboard/>
        <br></br><br></br><br></br>
      <UsuarioCreate/>
      <br></br><br></br><br></br><br></br><br></br>
  <Pie_de_paginaDashboard/>
</>
    );
}

// 4-

export default UsuarioDashboard;