import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.scss';

const Cart = () => {
  const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito, agregarAlCarrito } = useContext(CartContext);

  const procesarCompra = () => {

    vaciarCarrito();
  };

  if (cart.length === 0) {
    return (
      <div className="container my-5">
        <h2>Tu carrito está vacío</h2>
        <hr />
        <Link className="btn btn-primary" to="/productos">
          Volver a productos
        </Link>
      </div>
    );
  }

  return (
    <div className="container d-flex col my-3">
      <div className="cart-items d-flex col-5">
        {cart.map((producto) => (
          <div className="d-flex mb-1" key={producto.id}>
            <div className="flex">
              <Card.Img className="product-image" src={producto.img} />
            </div>
            <div className="flex-grow-4 ms-1">
              <Card className="ItemContent">
                <Card.Body className="Card-body">
                  <Card.Title>{producto.producto}</Card.Title>
                  <Card.Text>Precio Unitario: ${producto.precio}</Card.Text>
                  <Card.Text>Cantidad: {producto.cantidad}</Card.Text>
                  <div className="d-flex">
                    <button
                      className="btn btn-secondary me-1"
                      onClick={() => eliminarDelCarrito(producto.id, false)}
                      disabled={producto.cantidad === 1}
                    >
                      - Quitar
                    </button>
                    <button
                      className="btn btn-secondary me-1"
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      + Agregar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarDelCarrito(producto.id, true)}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary col-5">
        <h2>Resumen de tu compra</h2>
        <div className="cart-total">
          <h5>Total compra: $ {totalCompra()}</h5>
          <hr />
          <button onClick={vaciarCarrito} className="btn btn-danger w-100">
            Vaciar carrito
          </button>
          <Link to="/checkout" onClick={procesarCompra} className="btn btn-success w-100">
            Terminar mi compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
