// 1-
import React from "react";
import Encabezado from "../componentes/Encabezado";
import Pie_de_pagina from "../componentes/Pie_de_pagina"
import "../estilos/Contacto.css";

// 2-
function Contacto() {
    // 3-
    return (
        <>
            <Encabezado />
            <br></br>
            <div className="container">
                <h1>Contacto</h1>
                <form action="#" method="post">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required="" />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required="" />
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" required="" defaultValue={""} />
                    <input className="btn" type="submit" defaultValue="Enviar" />
                </form>
            </div>
            <br></br>
            <div className="icons">
                <img src={require('../imagenes/facebook.png')} width="30px" height="30px" />
                <img src={require('../imagenes/email.png')} width="30px" height="30px" />
                <img src={require('../imagenes/whatsapp.png')} width="30px" height="30px" />
            </div><br></br><br></br><br></br><br></br>
            <Pie_de_pagina />
        </>
    );
}

// 4-
export default Contacto;