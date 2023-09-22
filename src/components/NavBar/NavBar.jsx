import './NavBar.scss';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';



const NavBar = () => {

    return (
        <header className="header">
            
            <div className="header_container">
{                <img className='header_logo' src= {logo} alt="logo" />
}                <nav className='header_nav'>
                    <Link className="header_link" to="/" >Inicio</Link>
                    <Link className="header_link" to="/productos" >Productos</Link>
                    <Link className="header_link" to="/nosotros" >Nosotros</Link>
                </nav>
                    <CartWidget/>
            </div>

        </header>
    )
}

export default NavBar;