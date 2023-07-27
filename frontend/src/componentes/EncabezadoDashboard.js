// 1- importar react
import React from 'react'
// agregar los  enlaces
import { useNavigate } from 'react-router-dom';
import "../estilos/Dashboard.css";
import { Link } from 'react-router-dom';

// 2-
function EncabezadoDashboard() {
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
            <header className="sijaja">
        <h1 className="dash-panel">Panel de Control</h1>
        <br /><br />
        <ul className="sunsa">
          <li className="lobato">
          <Link to="/dashboard"><a className='nav-lista'>Regresar al Panel de Control</a></Link>
          </li>
        </ul>
      </header>
      <br /><br />

        </>
    );
}
export default EncabezadoDashboard;