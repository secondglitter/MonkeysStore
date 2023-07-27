import React, { useState, useEffect } from "react";
import axios from "axios";
import "../estilos/PedidosPage.css"; // Importamos el archivo de estilos CSS
import { Link } from "react-router-dom";

const PedidosPage = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    obtenerPedidos();
  }, []);

  const obtenerPedidos = () => {
    axios
      .get("http://localhost:8082/obtenerpedidos")
      .then((response) => {
        if (response.data.mensaje === "exitoso") {
          setPedidos(response.data.contenido);
        } else {
          console.log("Error al obtener los pedidos");
        }
      })
      .catch((error) => console.log(error));
  };

  const eliminarPedido = (idPedido) => {
    // Mostrar el aviso de confirmación antes de eliminar el pedido
    const confirmarEliminar = window.confirm("¿Estás seguro de que quieres eliminar este pedido?");

    if (confirmarEliminar) {
      axios
        .delete(`http://localhost:8082/eliminarpedido/${idPedido}`)
        .then((response) => {
          if (response.data.mensaje === "exitoso") {
            obtenerPedidos(); // Actualizamos la lista de pedidos después de eliminar uno
          } else {
            console.log("Error al eliminar el pedido");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <br />
      <br />
      <div className="pedidos-container">
        <h1>Pedidos</h1>
        <table className="pedidos-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Total</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Nombre de Usuario</th>
              <th>Cantidad de Productos</th>
              <th>Acciones</th> {/* Nueva columna para los botones */}
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.id_pedido}>
                <td>{pedido.id_pedido}</td>
                <td>${pedido.total_compra}</td>
                <td>{pedido.fecha}</td>
                <td>{pedido.hora}</td>
                <td>{pedido.nombre_usuario}</td>
                <td>{pedido.cantidad_productos}</td>
                <td>
                  <button className="eliminar-btn" onClick={() => eliminarPedido(pedido.id_pedido)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <Link to="/dashboard">
        <button className="pedidos-button">Volver al Panel de control</button>
      </Link>
    </>
  );
};

export default PedidosPage;

