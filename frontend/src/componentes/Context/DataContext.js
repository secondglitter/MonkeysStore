import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [productos, setProductos] = useState([]); // Cambiar el nombre de data a productos
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/obtenerproductos")
            .then((res) => setProductos(res.data.contenido)); // Asignar res.data.contenido al estado productos
    }, []);



    const buyProducts = (producto) => {
        const productrepeat = cart.find((item) => item.id === producto.id);

        if(productrepeat){
            setCart(cart.map((item) => (item.id === producto.id ? { ...producto, cantidad: 
            productrepeat.cantidad + 1 } : item )));
        }else {
            setCart([...cart, producto]);
        }
    };



    return <dataContext.Provider value={{ productos, cart, setCart, buyProducts }}>{children}</dataContext.Provider> // Cambiar data por productos
};

export default DataProvider;