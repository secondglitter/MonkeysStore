import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import '../CartContent/CartContent.css';

import CartItemContent from "./CartItemContent";

import React from 'react'

const CartElements = () => {
    const { cart, setCart } = useContext(dataContext);

    const deleteProduct = (id) => {
        const foundId = cart.find((element) => element.id === id);

        const newCart = cart.filter((element) => {
            return element !== foundId;
        });

        setCart(newCart);
    };
    return cart.map((Producto) => {
        return (
            <div className="cartContent" key={Producto.id}>
                <img src={require('../../imagenes/' + Producto.imagenes)} alt="product-card" />
                <h3 className="name">{Producto.nombre_producto}</h3>
                <CartItemContent producto={Producto} />
                <h4 className="price">{Producto.precio}$</h4>
                <h4 className="price">{Producto.precio * Producto.cantidad}$</h4>
                <h3 className="cart-delete-button" onClick={() => deleteProduct(Producto.id)}>❌</h3>
            </div>
        )
    })
};

export default CartElements;
