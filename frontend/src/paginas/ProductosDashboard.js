// 1-
import React from "react";
import EncabezadoDashboard from "../componentes/EncabezadoDashboard";
import Pie_de_paginaDashboard from "../componentes/Pie_de_paginaDashboard"
import ProductoCreate from "../componentes/ProductoCreate";


// 2-
function ProductosDashboard(){
    // 3-
    return(
        <>
        <EncabezadoDashboard/>
        <br></br><br></br><br></br>
      <ProductoCreate/>
      <br></br><br></br><br></br><br></br><br></br>
  <Pie_de_paginaDashboard/>
</>
    );
}

// 4-

export default ProductosDashboard;