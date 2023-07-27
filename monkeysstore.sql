-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-07-2023 a las 19:30:23
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `monkeysstore`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `IDcarrito` int(11) NOT NULL,
  `IDusuario` int(11) NOT NULL,
  `IDproducto` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre_categoria` varchar(60) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `imagenes` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre_categoria`, `descripcion`, `imagenes`) VALUES
(1, 'Gaming', 'Los mejores gadgets del gaming', 'gaming.png'),
(2, 'Hogar', 'Los gadgets mas utiles para el hogar', 'hogar.png'),
(3, 'Automoviles', 'Los unicos gadgets para tu auto', 'autos.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `nombre_usuario` varchar(100) NOT NULL,
  `total_compra` decimal(10,2) NOT NULL,
  `cantidad_productos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `fecha`, `hora`, `nombre_usuario`, `total_compra`, `cantidad_productos`) VALUES
(1, '2023-07-24', '08:08:23', 'Gael', 150.75, 3),
(2, '2023-07-24', '08:08:23', 'Joshua', 75.50, 2),
(3, '2023-07-24', '08:08:23', 'Adiel', 50.00, 1),
(4, '2023-07-24', '08:08:23', 'Coto', 120.25, 4),
(5, '2023-07-24', '08:08:23', 'Comal', 95.80, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre_producto` varchar(200) DEFAULT NULL,
  `descripcion` varchar(1000) DEFAULT NULL,
  `precio` decimal(5,0) DEFAULT NULL,
  `imagenes` varchar(100) DEFAULT NULL,
  `caracteristica1` varchar(200) DEFAULT NULL,
  `caracteristica2` varchar(200) DEFAULT NULL,
  `caracteristica3` varchar(200) DEFAULT NULL,
  `IDCategorias` int(11) DEFAULT NULL,
  `cantidad` int(100) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre_producto`, `descripcion`, `precio`, `imagenes`, `caracteristica1`, `caracteristica2`, `caracteristica3`, `IDCategorias`, `cantidad`) VALUES
(1, 'Control joystick inalámbrico Microsoft Xbox Wireless Controller Series X|S robot white', 'Este mando combina funciones revolucionarias mientras conserva precisión, \ncomodidad y exactitud en cada movimiento. Gracias a su ergonomía especialmente pensada para la posición de tu mano, puedes pasar horas jugando con total confort.', 1199, 'control.png', 'Cuenta con Bluetooth.', 'Compatible con: Xbox Series X, Xbox Series S, Xbox One, Computadoras y Tablets y Smartphones.', 'Con sistema de vibración incorporado.', 1, 1),
(2, 'Control joystick inalámbrico Microsoft Xbox Wireless Controller Series X|S robot carbon', 'Este mando combina funciones revolucionarias mientras conserva precisión, \ncomodidad y exactitud en cada movimiento. Gracias a su ergonomía especialmente pensada para la posición de tu mano, puedes pasar horas jugando con total confort.', 1199, 'control1.png', 'Cuenta con Bluetooth.', 'Compatible con: Xbox Series X, Xbox Series S, Xbox One, Computadoras y Tablets y Smartphones.', 'Con sistema de vibración incorporado.', 1, 1),
(3, 'Control Inalámbrico Dualsense White Para Playstation 5', 'El control inalámbrico DualSense para PS5 ofrece respuesta háptica inmersiva2, gatillos adaptativos dinámicos \ny un micrófono integrado, todo en un diseño icónico.', 1699, 'control2.png', 'Cuenta con Bluetooth.', 'Respuesta háptica', 'Gatillos adaptativos', 1, 1),
(4, 'Cargador Controles Para Xbox Con Batería Recargable De600mah', 'Esta estación de carga dual con licencia oficial de PowerA elimina el costo de las baterías de reemplazo \npara que pueda mantener sus controladores completamente cargados y listos para jugar. Incluye dos puertas de batería para Xbox Series X | S y dos para Xbox One más dos \nbaterías recargables de 1100 mAh para controladores inalámbricos Xbox.', 299, 'cargadorxbox.png', 'Incluye 2 baterías recargables para que el control esté completamente cargado y listo para usar.', 'Capacidad de carga: 600mAh', 'Tiempo de carga completa (aproximadamente): 5 horas de reproducción continua.', 1, 1),
(5, 'Audífonos gamer Onikuma K19 negro con luz rgb LED', '¡Experimenta la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Onikuma K19 no te pierdes ningún detalle y escuchas el audio tal y como fue diseñado por los creadores.', 320, 'onikuma.png', 'Con cancelación de ruido.', 'Micrófono flexible incorporado.', 'Sonido superior y sin límites.', 1, 1),
(6, 'Audífonos gamer Hunterspider V3 negro y azul con luz LED', '¡Experimenta la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Hunterspider V3 no te pierdes ningún detalle y escuchas el audio tal y como fue diseñado por los creadores.', 400, 'spider.png', 'Con cancelación de ruido.', 'Micrófono flexible incorporado.', 'Sonido superior y sin límites.', 1, 1),
(7, 'Receptor Auxiliar Bluetooth Aux 3.5 Auto Coche Manos Libres', 'Envía la señal de audio a tu teléfono o cualquier dispositivo con Bluetooth a cualquier equipo de audio que cuente con entrada Aux 3.5mm, cuenta con microfono y funciona perfecto para manos libres.', 99, 'auxiliar.png', 'Compacto y versatil.', 'Cargalo solamente 1 hora o menos y te dura hasta 3-4 horas en música.', 'Excelente calidad.', 3, 1),
(8, 'Plug In Adaptador Auto Encendedor 2 Puertos Usb 2.0 Cargador', 'PLUG-IN UNIVERSAL CON 2 PUERTOS USB PARA AUTOMÓVIL', 150, 'adapcarro.png', 'Entrada universal para el espacio de encendedor de cualquier automóvil- 2 puertos ', 'Voltaje de entrada: 12V-24V', 'Voltaje de salida: 5V/2.1Amp', 3, 1),
(9, 'Ventilador Doble Auto Coche Portátil Potente 2 Velocidades', 'Diseño de doble cabezal compartido por el piloto principal y los copilotos ----- El ventilador portátil para automóvil adopta un diseño de doble cabezal, hecho de plástico duradero y resortes y botones, diseño único pequeño y portátil, que brinda aire fresco para satisfacer las necesidades de varios grupos de personas.', 200, 'ventilador.png', 'Tamaño: 22*11*16cm', 'Material: polipropileno.', 'Voltaje: 12/24V', 3, 1),
(10, 'Amazon Echo Dot 3rd Gen con asistente virtual Alexa gray', 'Echo Dot 3rd Gen es la bocina más popular de Amazon: compacto pero con una calidad de sonido excepcional, mejor aún que la de su antecesor, el Echo DOT Gen 2.', 1399, 'alexa.png', 'Con reconocimiento de voz.', 'Función de control inteligente de dispositivos del hogar.', 'Conexión wifi y bluetooth.', 2, 1),
(11, 'Apple TV 4K A2169 2.ª generación 2021 control de voz 4K 32GB negro', 'El Apple TV 4K (segunda generación) combina lo mejor de la televisión con el acceso a tus servicios Apple favoritos. La calidad 4K HDR con alta frecuencia de cuadros y el sonido Dolby Atmos crean una experiencia cinematográfica en tu pantalla, ya sea al ver películas o eventos deportivos. ² Disfruta contenido de Apple TV+, Amazon Prime Video, Netflix y Disney+, además de canales en vivo de Hulu, YouTube TV y Sling TV.', 5399, 'apple.png', 'Reproduce imágenes y videos en 4K.', 'Con conectividad wifi y bluetooth.', 'Soporta sistema de audio Dolby.', 2, 1),
(12, 'Afilador Cuchillos Profesional 3 Etapas Inoxidable Tungsteno', 'Nos encanta cocinar y amamos hacerlo con estilo. Este afilador de cuchillos cambiará la apariencia de nuestra cocina y de nuestros platillos. Además, reducirá el esfuerzo que hacemos al picar y rebanar.', 119, 'afilador.png', 'AFILA EN DOS ETAPAS (TUNGSTENO Y CERÁMICA)', 'MANTÉN TUS CUCHILLOS AFILADOS COMO UN CHEF PROFESIONAL', 'COLOR: NEGO CON ROJO ', 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(60) NOT NULL,
  `correo_electronico` varchar(100) NOT NULL,
  `contrasenia` varchar(60) NOT NULL,
  `nivel` tinyint(4) NOT NULL DEFAULT 1,
  `estilos` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `correo_electronico`, `contrasenia`, `nivel`, `estilos`) VALUES
(4, 'gael', 'soyundios@gamil.com', '2804', 1, 1),
(9, 'sunsa', 'sunsa@gmail.com', '0', 1, 1);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `view_categorias_productos`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `view_categorias_productos` (
`precio` decimal(5,0)
,`ID` int(11)
,`imagen` varchar(100)
,`categorias` varchar(60)
,`productos` varchar(200)
);

-- --------------------------------------------------------

--
-- Estructura para la vista `view_categorias_productos`
--
DROP TABLE IF EXISTS `view_categorias_productos`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_categorias_productos`  AS SELECT `pr`.`precio` AS `precio`, `pr`.`id` AS `ID`, `pr`.`imagenes` AS `imagen`, `ca`.`nombre_categoria` AS `categorias`, `pr`.`nombre_producto` AS `productos` FROM (`categorias` `ca` join `productos` `pr` on(`ca`.`id` = `pr`.`IDCategorias`)) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`IDcarrito`),
  ADD UNIQUE KEY `IDusuario` (`IDusuario`,`IDproducto`),
  ADD KEY `IDproducto` (`IDproducto`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_productos_categorias` (`IDCategorias`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `IDcarrito` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`IDusuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`IDproducto`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `FK_productos_categorias` FOREIGN KEY (`IDCategorias`) REFERENCES `categorias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
