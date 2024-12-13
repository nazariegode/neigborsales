import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "../ItemDetail/ItemDetail.scss";
import { useCartContext } from "../Context/CartContext";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const { agregarAlCarrito } = useCartContext();
  const [cantidad, setCantidad] = useState(1);

  const filteredProducts = productos.filter((producto) => producto.id == id);

  const handleAddToCart = () => {
    const productToAdd = { ...filteredProducts[0], cantidad };
    if (filteredProducts[0]?.estado !== "Reservado") {
      agregarAlCarrito(productToAdd);
    }
  };

  return (
    <div className="item-detail-bkg">
      {filteredProducts.map((producto) => (
        <div className="item-detail-card p-4" key={producto.id}>
          <div className="item-detail-row row g-4">
            <div className="item-detail-col-img col-md-5 position-relative">
              <Card.Img
                className="item-detail-img img-fluid rounded"
                variant="top"
                src={producto.img}
              />
              
            </div>
            <div className="item-detail-body col-md-7">
              <div className="item-detail-body">
                <h2 className="item-detail-title mb-2">{producto.producto}</h2>
                <p className="item-detail-description mb-2">
                  {producto.descripcion}
                </p>

                <p className="precio">
                  <span className="precio-text">Marca:</span>
                  <span className="monto-text">{producto.marca}</span>
                </p>
                <p className="precio">
                  <span className="precio-text">Estado:</span>
                  <span className="monto-text">{producto.estado}</span>
                </p>
                <p className="item-detail-price mb-2">
                  <span className="titulo-precio">Precio: </span>
                  <span className="precio-precio">$ {producto.precio}</span>
                </p>
                <div className="item-detail-quantity">
                  <button
                    className="item-detail-btn-quantity"
                    onClick={() => setCantidad(Math.max(cantidad - 1, 1))}
                    disabled={producto.estado === "Reservado"}
                  >
                    -
                  </button>
                  <span className="item-detail-product-quantity mx-2">
                    {cantidad}
                  </span>
                  <button
                    className="item-detail-btn-quantity"
                    onClick={() => setCantidad(cantidad + 1)}
                    disabled={producto.estado === "Reservado"}
                  >
                    +
                  </button>
                </div>

                <button
                  className={`item-detail-btn-cart mt-3 ${
                    producto.estado === "Reservado" ? "disabled" : ""
                  }`}
                  onClick={handleAddToCart}
                  disabled={producto.estado === "Reservado"}
                >
                  {producto.estado === "Reservado"
                    ? "No disponible"
                    : "Agregar al carrito"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="back-to-shop">
        <Link className="link-back" to="/productos">
          &larr; Volver a productos
        </Link>
      </div>
    </div>
  );
};

export default React.memo(ItemDetail);
