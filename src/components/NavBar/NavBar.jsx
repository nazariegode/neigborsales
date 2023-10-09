import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss';

const NavBar = () => {

    return (
        <header className="header">
            
            <div className="header_container">
                    <Link to="/">
                        <img className='header_logo' src={logo} alt="logo" />
                    </Link>             
                    <nav className='header_nav'>
                        <Link className="header_link" to="/">Inicio</Link>
                        <NavDropdown title="PRODUCTOS" className="custom-dropdown">
                            <NavDropdown.Item as={NavLink} to="/productos">TODOS LOS PRODUCTOS</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/productos/sushi">SUSHI ROLLS</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/productos/compartir">PARA COMPARTIR</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/productos/bebidas">BEBIDAS</NavDropdown.Item>
                        </NavDropdown>
                        <Link className="header_link" to="/nosotros">Nosotros</Link>
                    </nav>


                    <CartWidget/>
            </div>

        </header>
    )
}

export default NavBar;
