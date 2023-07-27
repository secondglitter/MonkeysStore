// 1- importar react
import React from 'react'
// agregar los  enlaces
import { Link, useNavigate } from 'react-router-dom';
import '../estilos/Encabezado.css';
import Totalitems from './CartContent/Totalitems';
import { useContext } from "react";
import { dataContext } from './Context/DataContext';


// 2- crear la funcion
function Encabezado() {
        const moverse = (e) => {
            const seleccionado = e.target.value;
            if (seleccionado === "Usuario"){
                navegacion("/acceso");
            } else if (seleccionado === "Administrador"){
                navegacion ("/accesoadmin")
            }
        }
    const { cart } = useContext(dataContext);
    const login = localStorage.getItem('usuario');
    const navegacion = useNavigate();
    //Crear metodo que me permite salir
    const salir = () => {
        localStorage.clear();
        navegacion('/')
    }
    // 3- Metodo que regresa el html
    return (
        <>
            <header className="texto">
                <nav className="nav">
                    <Link to="/"><img src={require('../imagenes/monkeys.png')} id="monkeys" alt="Logo" /></Link>
                    <ul className="nav-lista">
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/conocenos">Conócenos</Link>
                        </li>
                        <li>
                            <Link to="/categorias">Categorias</Link>
                        </li>
                        <li>
                            <Link to="/productos">Productos</Link>
                        </li>
                        <li>
                        {
                            login ?
                                <>
                                    <a onClick={salir}> Salir</a>
                                </>
                                :
                                <>
                                    <select  onChange={moverse}>
                                    <option>
                                            Acceso
                                        </option>
                                        <option value="Usuario">
                                            Usuario
                                        </option>
                                        <option value="Administrador">
                                            Administrador
                                        </option>
                                    </select>
                                </>
                        }
                        </li>
                        <li>
                        {
                            login ?
                                <>
                                    {cart.length > 0 ? <Totalitems /> : null}
                    <Link to="/carrito"><img src={require('../imagenes/Carrito.png')} id="monkeys" alt="Carrito" /></Link>
                    
                                </>
                                :
                                <>
                                    <a></a>
                                </>
                        }
                        </li>
                        
                    </ul>
                </nav>
            </header>
        </>
    );
}
export default Encabezado;

