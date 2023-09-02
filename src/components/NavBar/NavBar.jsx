import './NavBar.scss';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';


const Header = () => {

    return (
        <header className="header">
            <div className="header_container">
{                <img className='header_logo' src= {logo} alt="logo" />
}                <nav className='header_nav'>
                    <a className="header_link" to="/" >Inicio</a>
                    <a className="header_link" to="/nosotros" >Nosotros</a>
                    <a className="header_link" to="/contacto" >Contacto</a>
                </nav>
                    <CartWidget/>
            </div>
        </header>
    )
}

export default Header