import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../Context/CartContext';
import './CartWidget.scss';

const CartWidget = () => {
  const { cart, totalCantidad } = useContext(CartContext);

  return (
    <>
      {cart.length > 0 && (
        <Link to="/cart" className="cart-widget cart-widget-active">
          <FaShoppingCart className="cart-icon" />
          <span style={{ color: 'red' }}>{totalCantidad()}</span> {/* Establece el color a rojo */}
        </Link>
      )}
    </>
  );
};

export default CartWidget;
