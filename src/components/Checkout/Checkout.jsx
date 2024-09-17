import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import { v4 as uuidv4 } from 'uuid';
import "./Checkout.scss";

const Checkout = () => {
  const { cart, totalCompra, vaciarCarrito } = useCartContext();
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    email: '',
  });

  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newOrderId = uuidv4();
    setOrderId(newOrderId);

    try {
        await fetch('http://localhost:5000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData,
                cart,
            }),
        });
    } catch (error) {
        console.error('Error sending email:', error);
    }
};


  return (
    <div className="container my-5">
      {orderId ? (
        <div>
          <h2>Tu compra se registró correctamente!</h2>
          <hr />
          <p>
            Tu número de compra es: <strong>{orderId}</strong>
          </p>
          <Link to="/" className="btn btn-primary">
            Volver al inicio
          </Link>
        </div>
      ) : (
        <div>
          <h2>Checkout</h2>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre:
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">
                Dirección:
              </label>
              <input
                type="text"
                className="form-control"
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Finalizar Compra
            </button>
          </form>
          <Link to="/cart" className="btn btn-primary mt-3">
            Volver al Carrito
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
