import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import '../CartContent/CartContent.css';

const Totalitems = () => {
  const { cart } = useContext(dataContext);

  const itemCantidad = cart.reduce((acc, el) => acc + el.cantidad, 0);
  return <span className="cart-items-total">
    <div className="span-item">
    {itemCantidad}
    </div>
    </span>;
};

export default Totalitems;