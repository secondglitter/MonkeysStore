// 1- importar react
import React from 'react'
import AnimatedTypingText from '../componentes/TextoSolo';
import '../estilos/Frase.css';
import Encabezado from '../componentes/Encabezado';
import Footer from '../componentes/Pie_de_pagina';


// 2- crear la funcion
function Frase() {
    // 3- Metodo que regresa el html
    return (
        <>
            <Encabezado />
            <div className='texto inicio-container frase-fondo'>
            <br /><br /><br /><br /><br /><br /><br />
                <h1>
                    <AnimatedTypingText
                        text="  Darwin planteó la teoría de la evolución... Nosotros ampliamos la evolución... Con nuestros gadgets..."
                        typingSpeed={60} // Velocidad de escritura en milisegundos por caracter
                        delay={1000} // Retardo en milisegundos antes de comenzar la animación
                    />
                </h1>
            <br /><br /><br /><br /><br /><br /><br />
            </div>
            <Footer />
        </>
    );
}

// 4- exportamos
export default Frase;