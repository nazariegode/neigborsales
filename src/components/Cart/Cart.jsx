import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.scss";

const Cart = () => {
  const {
    cart,
    totalCompra,
    vaciarCarrito,
    eliminarDelCarrito,
    agregarAlCarrito,
  } = useContext(CartContext);

  const procesarCompra = () => {
    vaciarCarrito();
  };

  const handleDelete = (productoId) => {
    // Mostrar confirmación antes de eliminar el producto
    const isConfirmed = window.confirm("¿Estás seguro de que quieres eliminar este producto?");
    if (isConfirmed) {
      eliminarDelCarrito(productoId, true);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty text-center my-5">
        <h2>Tu carrito está vacío</h2>
        <hr />
        <Link className="btn-hola" to="/productos">
          Volver a productos
        </Link>
      </div>
    );
  }

  return (
    <div className="card cart">
      <div className="row">
        <div className="col-md-8 cart-items">
          <div className="title">
            <h4>
              <b>Carrito de Compras</b>
            </h4>
          </div>

          {cart.map((producto) => (
            <div className="row border-top border-bottom" key={producto.id}>
              <div className="row main align-items-center">
                <div className="col-3 col-md-2">
                  <img
                    className="img-fluid"
                    src={producto.img}
                    alt={producto.producto}
                  />
                </div>
                <div className="col-5 col-md-4 text-left">
                  <div className="product-name">{producto.producto}</div>
                  <div className="product-category">{producto.categoria}</div>
                  <span className="prices">$ {producto.precio}</span>
                </div>
                <div className="col-4 col-md-6 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <button
                      className="btn-quantity"
                      onClick={() => eliminarDelCarrito(producto.id, false)}
                    >
                      -
                    </button>
                    <span className="product-quantity">
                      {producto.cantidad}
                    </span>
                    <button
                      className="btn-quantity"
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      +
                    </button>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaTrashAlt
                      className="icon-delete"
                      onClick={() => handleDelete(producto.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="back-to-shop">
            <Link className="back-to-shop" to="/productos">
              &larr; Volver a productos
            </Link>
          </div>
        </div>

        <div className="col-md-4 summary">
          <h5>
            <b>Resumen</b>
          </h5>
          <hr />

          <div className="texto">
            <span className="titulo-prices">Cantidad de Productos: </span>
            <span className="pricess">
              {" "}
              {cart.reduce((total, producto) => total + producto.cantidad, 0)}
            </span>
          </div>

          <div className="texto2">
            <span className="titulo-prices">Total Compra:</span>
            <span className="pricess"> $ {totalCompra()}</span>
          </div>
          <button className="btn-proccess">
            <Link to="/checkout" className="text-white text-decoration-none">
              Procesar Compra
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
