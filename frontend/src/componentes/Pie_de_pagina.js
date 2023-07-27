// 1- importar react
import React from 'react'
// agregar los  enlaces
import '../estilos/Pie_de_pagina.css';
import { Link } from 'react-router-dom';


// 2- crear la funcion
function Footer() {
    // 3- Metodo que regresa el html
    return (
        <>
                        <footer class="footer">
                        <div>Todos los derechos reservados a monkeys store | SM33</div>
                            <Link to="/frase">🍌</Link>
                        </footer>
        </>
    );
}

// 4- exportamos
export default Footer;