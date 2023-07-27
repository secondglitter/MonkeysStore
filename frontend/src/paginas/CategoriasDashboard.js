// 1-
import React from "react";
import EncabezadoDashboard from "../componentes/EncabezadoDashboard";
import Pie_de_paginaDashboard from "../componentes/Pie_de_paginaDashboard"
import CategoriaCreate from "../componentes/CategoriaCreate";


// 2-
function CategoriaDashboard(){
    // 3-
    return(
        <>
        <EncabezadoDashboard/>

        <br></br><br></br><br></br>
      <CategoriaCreate/>
      <br></br><br></br><br></br><br></br><br></br>
  <Pie_de_paginaDashboard/>
</>
    );
}

// 4-

export default CategoriaDashboard;