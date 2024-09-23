import './ItemCard.scss';
import Card from 'react-bootstrap/Card'; // Si necesitas seguir usando Card
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';

const ItemCard = ({ producto }) => {
    const { agregarAlCarrito } = useCartContext();

    const handleAddToCart = () => {
        agregarAlCarrito(producto);
    };

    return (
        <div className='ItemCard'>
            <Card className='ItemContent'>
                <div className='Card-image-container'>
                    <Card.Img className='Card-image' src={producto.img} />
                </div>
                <div className='Card-body'>
                    <h4 className='titulo'>{producto.producto}</h4>
                    <p className='precio'>Precio: ${producto.precio}</p>

                    <Link className='btn btn-detail' to={`/item/${producto.id}`}>
                        Ver detalle
                    </Link>
                    <button className='btn btn-add' onClick={handleAddToCart}>
                        Agregar al carrito
                    </button>
                </div>
            </Card>
        </div>
    );
}

export default ItemCard;
