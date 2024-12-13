import "./ItemCard.scss";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const ItemCard = ({ producto }) => {
  const { agregarAlCarrito } = useCartContext();

  const handleAddToCart = () => {
    if (producto.estado !== "Reservado") {
      agregarAlCarrito(producto);
    }
  };

  return (
    <div className="ItemCard">
      <Card className="ItemContent">
        <div className={`Card-image-container ${producto.estado === "Reservado" ? "reserved" : ""}`}>
          <Card.Img className="Card-image" src={producto.img} />
          {producto.estado === "Reservado" && <div className="reserved-overlay">RESERVADO</div>}
        </div>

        <div className="Card-body">
          <div className="text-area row">
            <h4 className="titulo">{producto.producto}</h4>
            <p className="precio">
              <span className="precio-text">Marca:</span>
              <span className="monto-text">{producto.marca}</span>
            </p>
            <p className="precio">
              <span className="precio-text">Precio:</span>
              <span className="monto-text">$ {producto.precio}</span>
            </p>
          </div>

          <Link className="btn-detail" to={`/item/${producto.id}`}>
            Ver detalle
          </Link>
          <button
            className={`btn-add ${producto.estado === "Reservado" ? "disabled" : ""}`}
            onClick={handleAddToCart}
            disabled={producto.estado === "Reservado"}
          >
            {producto.estado === "Reservado" ? "No disponible" : "Agregar al carrito"}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ItemCard;
