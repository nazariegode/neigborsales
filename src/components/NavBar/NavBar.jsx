import './NavBar.scss';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';



const NavBar = () => {

    return (
        <header className="header">
            
            <div className="header_container">
{                <img className='header_logo' src= {logo} alt="logo" />
}                
                <nav className='header_nav'>
                    <Link className="header_link" to="/" >Inicio</Link>
                    <NavDropdown title="PRODUCTOS" className="custom-dropdown">
                        <Link className="dropdown-item" to="/productos">TODOS LOS PRODUCTOS</Link>
                        <Link className="dropdown-item" to="/productos/category/Sushi">SUSHI ROLLS</Link>
                        <Link className="dropdown-item" to="/productos/Compartir">PARA COMPARTIR</Link>
                        <Link className="dropdown-item" to="/productos/Bebidas">BEBIDAS</Link>
                    </NavDropdown>
                    <Link className="header_link" to="/nosotros" >Nosotros</Link>
                </nav>

                    <CartWidget/>
            </div>

        </header>
    )
}

export default NavBar;
