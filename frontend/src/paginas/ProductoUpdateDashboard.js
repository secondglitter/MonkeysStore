// 1-
import React from "react";
import EncabezadoDashboard from "../componentes/EncabezadoDashboard";
import Pie_de_paginaDashboard from "../componentes/Pie_de_paginaDashboard"
import Actualizarproducto from "../componentes/ProductoUpdate";


// 2-
function CategoriaUpdateDashboard(){
    // 3-
    return(
        <>
        <EncabezadoDashboard/>
        <br></br><br></br><br></br>
      <Actualizarproducto/>
      <br></br><br></br><br></br><br></br><br></br>
  <Pie_de_paginaDashboard/>
</>
    );
}

// 4-

export default CategoriaUpdateDashboard;