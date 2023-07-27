import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

const BotonPayPal = ({ precio, nombreUsuario }) => {
  const paypalOptions = {
    "client-id": "AVI8HUJtNHpbC7JwDZ_z4G4paIO9WUW0xG5TMvNb8XaBxWEO8ANXuSwOVvPYm50rRiPnRowy-oXcaEd5", // Reemplaza con tu Client ID de PayPal
    currency: "MXN", // Moneda del precio (puedes cambiarlo a la moneda que necesites)
  };

  const onSuccess = async (details, data) => {
    console.log("Pago exitoso", details);

    try {
      // Hacer una llamada al servidor para guardar el pedido
      const response = await axios.post("http://localhost:8082/guardarpedido", {
        precio: precio,
        detalles: details,
        nombreUsuario: nombreUsuario,
      });
      console.log(response.data.mensaje); // Mensaje de respuesta del servidor
    } catch (error) {
      console.error("Error al guardar el pedido en el servidor", error);
      // Aquí puedes manejar los errores en caso de que no se pueda guardar el pedido en el servidor.
    }
  };

  const onError = (error) => {
    console.error("Error en el pago", error);
    // Aquí puedes manejar los errores en el proceso de pago, como mostrar un mensaje de error al usuario.
  };

  const onCancel = (data) => {
    console.log("Pago cancelado", data);
    // Aquí puedes manejar la cancelación del pago, como mostrar un mensaje de cancelación al usuario.
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: precio,
                },
              },
            ],
          });
        }}
        onSuccess={onSuccess}
        onError={onError}
        onCancel={onCancel}
      />
    </PayPalScriptProvider>
  );
};

export default BotonPayPal;

