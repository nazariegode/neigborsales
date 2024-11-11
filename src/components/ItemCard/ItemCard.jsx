import "./ItemCard.scss";
import Card from "react-bootstrap/Card"; // Si necesitas seguir usando Card
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const ItemCard = ({ producto }) => {
  const { agregarAlCarrito } = useCartContext();

  const handleAddToCart = () => {
    agregarAlCarrito(producto);
  };

  return (
    <div className="ItemCard">
      <Card className="ItemContent">
        <div className="Card-image-container">
          <Card.Img className="Card-image" src={producto.img} />
        </div>

        <div className="Card-body">
          <div className="text-area row">
            <h4 className="titulo">{producto.producto}</h4>
            <p className="precio">
              <span className="precio-text">Marca:</span>
              <span className="monto-text">{producto.marca}</span>
            </p>
            <p className="precio">
              <span className="precio-text">Estado:</span>
              <span className="monto-text">{producto.estado}</span>
            </p>
            <p className="precio">
              <span className="precio-text">Precio:</span>
              <span className="monto-text">$ {producto.precio}</span>
            </p>
          </div>

          <Link className="btn-detail" to={`/item/${producto.id}`}>
            Ver detalle
          </Link>
          <button className="btn-add" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ItemCard;
