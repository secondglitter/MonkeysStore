import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Categorias from './paginas/Categorias';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Contacto from './paginas/Contacto';
import Texto from './paginas/Texto';
import Acceso from './paginas/Acceso';
import AccesoAdmin from './paginas/AccesoAdmin';
import Registro from './paginas/Registro';
import Dashboard from './paginas/Dashboard';
import Detalles from './paginas/Detalles';
import Cgaming from './paginas/Cgaming';
import CategoriDashboard from './paginas/CategoriasDashboard';
import TablaCategoriaDashboard from './paginas/TablaCategoriaDashboard'
import CategoriaUpdateDashboard from './paginas/CategoriaUpdateDashboard'
import ProductosDashboard from './paginas/ProductosDashboard'
import TablaProductoDashboard from './paginas/TablaProductoDashboard'
import ProductoUpdateDashboard from './paginas/ProductoUpdateDashboard'
import DataProvider from './componentes/Context/DataContext';
import CartContent from './componentes/CartContent/CartContent';
import UsuariosDashboard from './paginas/UsuariosDashboard';
import TablaUsuarioDashboard from './paginas/TablaUsuarioDashboard';
import UsuarioUpdateDashboard from './paginas/UsuarioUpdateDashboard';
import PedidosPage from './paginas/PedidosPage';
import Frase from './paginas/Frase';
import Producto from './componentes/Producto';

function App() {
  return (
    <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/conocenos' element={<Texto/>}></Route>
        <Route path='/categorias' element={<Categorias/>}></Route>
        <Route path='/productos' element={<Producto      />}></Route>
        <Route path='/acceso' element={<Acceso/>}></Route>
        <Route path='/accesoadmin' element={<AccesoAdmin/>}></Route>
        <Route path='/registro' element={<Registro/>}></Route> 
        <Route path='/dashboard' element={<Dashboard/>}></Route> 
        <Route path='/detalles/:id' element={<Detalles/>}></Route>
        <Route path='/filtro/:id' element={<Cgaming/>}></Route> 
        <Route path='/admin/crearCategoria' element={<CategoriDashboard/>}></Route> 
        <Route path='/admin/categorias' element={<TablaCategoriaDashboard/>}></Route>
        <Route path='/admin/actualizarCategoria' element={<CategoriaUpdateDashboard/>}></Route> 
        <Route path='/admin/crearProducto' element={<ProductosDashboard/>}></Route> 
        <Route path='/admin/productos' element={<TablaProductoDashboard/>}></Route>
        <Route path='/admin/actualizarProducto' element={<ProductoUpdateDashboard/>}></Route>
        <Route path='/carrito' element={<CartContent/>}></Route>
        <Route path='/admin/actualizarProducto' element={<ProductoUpdateDashboard/>}></Route> 
        <Route path='/admin/crearUsuario' element={<UsuariosDashboard/>}></Route> 
        <Route path='/admin/usuarios' element={<TablaUsuarioDashboard/>}></Route>
        <Route path='/admin/actualizarUsuario' element={<UsuarioUpdateDashboard/>}></Route>
        <Route path='/pedidos' element={<PedidosPage/>}></Route>
        <Route path='/frase' element={<Frase/>}></Route>
      </Routes>
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;