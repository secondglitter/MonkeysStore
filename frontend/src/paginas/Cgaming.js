
// 1-
import React from "react";
import Encabezado from "../componentes/Encabezado";
import Pie_de_pagina from "../componentes/Pie_de_pagina"
import "../estilos/Gaming.css";
import Gaming from "../componentes/Gaming";
import FlechaArriba from "../componentes/FlechaScroll";



// 2-
function Cgaming(){
    // 3-
    return(
        <>
                    <Encabezado />
                    <div className="fondo-gaming">
                    <br></br>
                    <h1 className="card-title-gaming">Productos</h1>
                    <br></br><br></br>
                    <div  className="card-texto-gaming">
                    <Gaming />
                    </div>
                    <br></br><br></br><br></br>
                    </div>
                    <Pie_de_pagina />
                    <FlechaArriba />
        </>
    );
}

// 4-

export default Cgaming;