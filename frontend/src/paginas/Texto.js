
// ARCHIVO RENOMBRADO COMO Conocenos.js


// 1-
import React from "react";
import Encabezado from "../componentes/Encabezado";
import Pie_de_pagina from "../componentes/Pie_de_pagina"
import "../estilos/Texto.css";

// 2-
function Texto() {
  // 3-
  return (
    <>
      <Encabezado />
      <div className="inicio-container">
        <br /><br /><br /><br /><br /><br />
        <main className="seccion-texto">
          <div className="texto">
            <br /><br />
            <h1 className="izquierda">Conócenos</h1>
            <br />
            <img src={require('../imagenes/conocenos.png')} alt="Acceso principal" className="foto" />
            <p>
              Somos una empresa apasionada por la innovación y los gadgets de vanguardia. En un mundo en constante evolución tecnológica, 
              nos enorgullece ofrecer una amplia gama de dispositivos electrónicos que se adaptan a las necesidades y estilos de vida de nuestros 
              clientes. <br /><br />
              Nuestro objetivo es brindar experiencias extraordinarias a través de productos que combinan un diseño elegante, 
              funcionalidad excepcional y la última tecnología disponible. Desde teléfonos inteligentes de última generación hasta wearables 
              inteligentes, altavoces inalámbricos y accesorios conectados, cada artículo en nuestro catálogo ha sido cuidadosamente seleccionado 
              para superar las expectativas de nuestros clientes. <br /><br />
              Nos esforzamos por mantenernos a la vanguardia de la industria, colaborando con 
              los principales fabricantes y siguiendo de cerca las tendencias emergentes. Además, nuestro equipo altamente capacitado está dedicado
               a proporcionar un servicio al cliente excepcional, brindando asesoramiento experto y soluciones personalizadas. Confiar en nosotros 
               significa estar un paso adelante en el mundo de la tecnología y disfrutar de productos que hacen nuestra vida más cómoda, 
               emocionante y conectada. ¡Bienvenido a nuestro mundo de gadgets de última generación!
            </p>
            <br />
          </div>
        </main>
        </div>
      <Pie_de_pagina />
    </>
  );
}

// 4-

export default Texto;