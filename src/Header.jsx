import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <nav>
        <ol>
          {/* Agregamos los link para que funcionen y conecten con los routes */}
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/catalog">Lista de productos</Link></li>
          <li><Link to="/formulario">Agregar</Link></li>
          <li><Link to="/sobre-nosotros">Sobre nosotros</Link></li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;