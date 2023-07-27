
// 1-
import React from "react";
import Encabezado from "../componentes/Encabezado";
import Pie_de_pagina from "../componentes/Pie_de_pagina"
import "../estilos/Categorias.css";
import Catalogo from "../componentes/Catalogo";


// 2-
function Categorias() {
    // 3-
    return (
        <>
            <Encabezado />
            <div className="fondo-categorias">
                <br /><br /><br /><br />
                <div className="seccion-categorias">
                    <h1 class="texto-categorias">Contamos con diversas categorias</h1>
                    <br></br><br></br><br></br>
                    <Catalogo />
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            <Pie_de_pagina />
        </>
    );
}

// 4-

export default Categorias;