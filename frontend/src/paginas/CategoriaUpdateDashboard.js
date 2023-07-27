// 1-
import React from "react";
import EncabezadoDashboard from "../componentes/EncabezadoDashboard";
import Pie_de_paginaDashboard from "../componentes/Pie_de_paginaDashboard"
import Actualizarcategoria from "../componentes/CategoriaUpdate";


// 2-
function CategoriaUpdateDashboard(){
    // 3-
    return(
        <>
        <EncabezadoDashboard/>
        
        <br></br><br></br><br></br>
      <Actualizarcategoria/>
      <br></br><br></br><br></br><br></br><br></br>
  <Pie_de_paginaDashboard/>
</>
    );
}

// 4-

export default CategoriaUpdateDashboard;