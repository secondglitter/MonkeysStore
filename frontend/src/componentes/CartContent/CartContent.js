import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import Encabezado from "../Encabezado";
import Footer from "../Pie_de_pagina";

const CartContent = () => {
    const { cart } = useContext(dataContext);

    return cart.length > 0 ? (
    <>
      <Encabezado />
      <br /><br /><br /><br /><br /><br />
      <CartElements />
      <br />
      <CartTotal />
      <br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
    </>
    ) : (
      <>
      <Encabezado />
      <br /><br /><br /><br /><br /><br />
      <h2 className="cartContent">Tu carrito esta vacio</h2>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
      </>
    );
};

export default CartContent;
