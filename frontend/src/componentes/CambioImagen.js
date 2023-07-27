import React, { useState, useEffect } from "react";

const ImagenesAlAzar = () => {
  const importarTodasLasImagenes = (requireContext) => {
    return requireContext.keys().map(requireContext);
  };

  const imagenesContext = require.context("../imagenes", false, /\.(png|jpe?g|svg)$/);
  const imagenes = importarTodasLasImagenes(imagenesContext);

  const [imagenActual, setImagenActual] = useState(imagenes[0].default);

  useEffect(() => {
    // Función para cambiar la imagen al azar cada 3 segundos
    const cambiarImagenAlAzar = () => {
      const imagenAleatoria = imagenes[Math.floor(Math.random() * imagenes.length)].default;
      setImagenActual(imagenAleatoria);
    };

    // Establecemos el intervalo para cambiar la imagen cada 3 segundos (3000 ms)
    const intervalo = setInterval(cambiarImagenAlAzar, 3000);

    // Limpiamos el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalo);
  }, [imagenes]);

  return (
    <div>
      <img src={imagenActual} alt="Imagen al Azar" />
    </div>
  );
};

export default ImagenesAlAzar;