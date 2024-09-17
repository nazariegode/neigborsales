import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.scss';

const Cart = () => {
  const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito, agregarAlCarrito } = useContext(CartContext);

  const procesarCompra = () => {
    vaciarCarrito();
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty text-center my-5">
        <h2>Tu carrito está vacío</h2>
        <hr />
        <Link className="btn btn-resume" to="/productos">
          Volver a productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h3 className='mb-4'>Aquí tienes tus productos seleccionados... </h3>
      <div className="cart-items">
        {cart.map((producto) => (
          <div className="card mb-3" key={producto.id}>
            <div className="row g-0">
              <div className="col-md-5">
                <img className="img-fluid" src={producto.img} alt={producto.producto} />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">{producto.producto}</h5>
                  <p className="card-text">Precio Unitario: ${producto.precio}</p>
                  <p className="card-text">Cantidad: {producto.cantidad}</p>
                </div>
                  <div className="d-flex card-buttons">
                    <button
                      className="btn btn-cart "
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      + Agregar
                    </button>
                    <button
                      className="btn btn-cart"
                      onClick={() => eliminarDelCarrito(producto.id, false)}
                      disabled={producto.cantidad === 1}
                    >
                      - Quitar
                    </button>
                    <button
                      className="btn btn-cart"
                      onClick={() => eliminarDelCarrito(producto.id, true)}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Resumen de tu compra</h2>
        <div className="cart-total">
          <h5>Total compra: ${totalCompra()}</h5>
          <hr />
        </div>
        <div className="cart-total-buttons">
        <button onClick={vaciarCarrito} className="btn btn-resume">
            Vaciar carrito
          </button>
          <Link to="/checkout" onClick={procesarCompra} className="btn btn-resume">
            Terminar mi compra
          </Link>
        </div>
          
      </div>
    </div>
  );
};

export default Cart;
