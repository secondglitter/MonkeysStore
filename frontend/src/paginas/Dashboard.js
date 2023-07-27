// 1-
import React from "react";
import "../estilos/Dashboard.css";
import {Link, useNavigate } from 'react-router-dom';
import Footer from "../componentes/Pie_de_pagina";

// 2-
function Dashboard() {
  const login = localStorage.getItem('usuario');
  const navegacion = useNavigate();
  //Crear metodo que me permite salir
  const salir = () => {
      localStorage.clear();
      navegacion('/')
  }
  // 3-
  return (
    <>

      <header className="sijaja">
        <h1 className="dash-panel">Panel de Control</h1>
        <ul className="sunsa">
          <br /><br />
          <li className="lobato">
          <a className='nav-lista' onClick={salir}>Cerrar sesión</a>
          </li>
        </ul>
      </header>
      <br /><br /><br />
      <h1 className="dash-centrar">Monkeys Store</h1>
      <br />
      <br />
      <section className="nojaja">
        <div className="seccion-categorias texto-categorias categorias">
          <h2>Categoría</h2>
          <p>Administracion de las categorias.</p>
          <Link to="/admin/categorias"><button className="dash-ir">Ir</button></Link>
          <Link to="/admin/crearCategoria"><button className="dash-ir">Crear</button></Link>
          
        </div>
        <div className="seccion-categorias texto-categorias categorias">
          <h2>Productos</h2>
          <p>Administración de los productos</p>
          <Link to="/admin/productos"><button className="dash-ir">Ir</button></Link>
          <Link to="/admin/crearProducto"><button className="dash-ir">Crear</button></Link>
        </div>
        <div className="seccion-categorias texto-categorias categorias">
          <h2>Pedidos</h2>
          <p>Administración de los pedidos</p>
          <br /><br />
          <Link to="/pedidos"><button className="dash-ir">Ir</button></Link>
        </div>
        <div className="seccion-categorias texto-categorias categorias">
          <h2>Usuarios</h2>
          <p>Adimistración de los usuarios</p>
          <Link to="/admin/usuarios"><button className="dash-ir">Ir</button></Link>
          <Link to="/admin/crearUsuario"><button className="dash-ir">Crear</button></Link>
        </div>
      </section>
      <br /><br /><br />
      <Footer/>
    </>
    /*    <>
            <section className="uwu2"> 
                <header className="dashboard">
                <nav className="nav">
                <h1 className="center">ADMINISTRACIÓN</h1>
                </nav>
                </header>
                <br />
                <br />
                <br />
                <br />
                <div className="container3">
                    <div id="products" className="card1">
                        <h2 className="nya">Categorias</h2>
                        <p className="kya">Admistracion de categorias</p>
                    </div>
                    <div id="categories" className="card1">
                        <h2 className="nya">Productos</h2>
                        <p className="kya">Admistracion de productos</p>
                    </div>
                    <div id="orders" className="card1">
                        <h2 className="nya">Pedidos</h2>
                        <p className="kya">Admistracion de pedidos</p>
                    </div>
                    <div id="users" className="card1">
                        <h2 className="nya">Usuarios</h2>
                        <p className="kya">Admistracion de usuarios</p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </section>
        </> */
  );
}

// 4-
export default Dashboard;