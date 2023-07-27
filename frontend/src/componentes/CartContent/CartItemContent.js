import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemContent = ({ producto }) => {
    const { cart, setCart, buyProducts } = useContext(dataContext);

    const decrese = () => {
        const productrepeat = cart.find((item) => item.id === producto.id);

        productrepeat.cantidad !== 1 &&
        setCart(cart.map((item) => (item.id === producto.id ? { ...producto, cantidad: 
            productrepeat.cantidad - 1 } : item )));
    };

  return (
    <>
    <p className='counter-button' onClick={decrese}>
    ➖
    </p>
    <p>{producto.cantidad}</p>
    <p className='counter-button' onClick={() => buyProducts(producto)}>
    ➕
    </p>
    </>
  )
}

export default CartItemContent