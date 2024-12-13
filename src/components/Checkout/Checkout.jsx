import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../firebase/config";
import { collection, addDoc, updateDoc, doc, getDoc, runTransaction } from "firebase/firestore";
import "./Checkout.scss";

const Checkout = () => {
  const { cart, vaciarCarrito } = useCartContext();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    comuna: "",
    telefono: "",
    email: "",
  });
  const [orderId, setOrderId] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true); // Activa el spinner

    const newOrderId = uuidv4();
    setOrderId(newOrderId);

    const orderData = {
      orderId: newOrderId,
      ...formData,
      cart,
      date: new Date(),
    };

    try {
      // Crear la orden en Firebase
      await addDoc(collection(db, "orders"), orderData);

      // Actualizar el estado de los productos a "Reservado" en la colección "products"
      for (const item of cart) {
        const productRef = doc(db, "productos", item.id); // Obtener el documento del producto
        const productSnapshot = await getDoc(productRef); // Obtener el producto
        const productData = productSnapshot.data();

        if (productData && productData.estado !== "Reservado") {
          await updateDoc(productRef, {
            estado: "Reservado", // Cambiar el estado del producto
            stock: productData.stock - 1, // Decrecer el stock del producto en 1
          });
        }
      }

  

      vaciarCarrito(); // Vaciar carrito después de la compra
    } catch (error) {
      console.error("Error al procesar la compra:", error);
      alert("Hubo un problema al procesar tu compra. Intenta nuevamente.");
    } finally {
      setIsProcessing(false); // Desactiva el spinner
    }
  };

  const handleBackToHome = () => {
    vaciarCarrito();
  };

  return (
    <div className="checkout">
      {isProcessing ? (
        <div className="processing-spinner">
          <div className="spinner"></div>
          <p>Procesando tu compra...</p>
        </div>
      ) : orderId ? (
        <div className="confirmation">
          <h1>¡FELICIDADES!</h1>
          <h2>Tu compra se registró correctamente</h2>
          <p>Revisa en tu email tu bandeja de entrada, tal vez en los "no deseados" encontrarás el detalle de tu compra.</p>
          <p>Tu compra se registró bajo el número de compra:</p>
          <h5><strong>{orderId}</strong></h5>
          <p>¡Te esperamos de vuelta pronto!</p>
          <Link to="/" className="btn btn-summit" onClick={handleBackToHome}>
            Volver al inicio
          </Link>
        </div>
      ) : (
        <div>
          <h2>Proceso de Compra</h2>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ej: Pedro"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido:</label>
              <input
                type="text"
                id="apellido"
                placeholder="Ej: Pérez"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="direccion">Dirección:</label>
              <input
                type="text"
                id="direccion"
                placeholder="Ej: Calle venezuela #300"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="comuna">Comuna:</label>
              <input
                type="text"
                id="comuna"
                placeholder="Ej: Providencia"
                name="comuna"
                value={formData.comuna}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="tel"
                id="telefono"
                placeholder="Ej: +569 987654321"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Ej: pedroperez@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-submit">
              Finalizar Compra
            </button>
          </form>
          <div className="back-to-shop">
            <Link className="back-to-shop" to="/cart">
              &larr; Volver a carrito
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
