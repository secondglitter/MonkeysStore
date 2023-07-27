// 1-
import React from "react";
import EncabezadoDashboard from "../componentes/EncabezadoDashboard";
import Pie_de_paginaDashboard from "../componentes/Pie_de_paginaDashboard"
import Actualizarusuario from "../componentes/UsuarioUpdate";


// 2-
function UsuarioUpdateDashboard(){
    // 3-
    return(
        <>
        <EncabezadoDashboard/>
        <br></br><br></br><br></br>
      <Actualizarusuario/>
      <br></br><br></br><br></br><br></br><br></br>
  <Pie_de_paginaDashboard/>
</>
    );
}

// 4-

export default UsuarioUpdateDashboard;