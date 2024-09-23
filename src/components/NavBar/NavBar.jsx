import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '/public/assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (open) => {
        setIsMenuOpen(open);
    };

    const handleLinkClick = () => {
        if (isMenuOpen) {
            toggleMenu(false);
        }
    };

    return (
        <header className="header">
            <div className="header_container">
                <button className="header_toggle" onClick={() => toggleMenu(!isMenuOpen)}>
                    <span className="header_toggle-icon">&#9776;</span>
                </button>

                <Link to="/">
                    <img className="header_logo" src={logo} alt="logo" />
                </Link>
                
                <nav className={`header_nav ${isMenuOpen ? 'open' : ''}`}>
                    <Link className="header_link" to="/" onClick={handleLinkClick}>Inicio</Link>
                    <NavDropdown title="PRODUCTOS" className="custom-dropdown" onClick={(e) => e.stopPropagation()}>
                        <NavDropdown.Item as={NavLink} to="/productos" onClick={handleLinkClick} activeClassName="active">Todos los productos</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/productos/sushi" onClick={handleLinkClick} activeClassName="active">Sushi Rolls</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/productos/compartir" onClick={handleLinkClick} activeClassName="active">Para compartir</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/productos/bebidas" onClick={handleLinkClick} activeClassName="active">Bebidas</NavDropdown.Item>
                    </NavDropdown>
                    <Link className="header_link" to="/nosotros" onClick={handleLinkClick}>Nosotros</Link>
                </nav>

                <CartWidget />
            </div>
        </header>
    );
};

export default NavBar;
