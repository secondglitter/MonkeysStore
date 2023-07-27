import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import BotonPayPal from "../PayPal/BotonPayPal";



const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, el)=> acc + el.precio * el.cantidad, 0);
  return <div className="cartTotal">
    <h3>Total a pagar: {total} $</h3>
    <BotonPayPal precio={total} />
  </div>
};

export default CartTotal