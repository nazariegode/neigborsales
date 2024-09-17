import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCard.scss';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemCard = ({ producto }) => {
    return (
        <div className='ItemCard'>
            <Card className='ItemContent'>
                <div className='Card-image-container'>
                    <Card.Img className='Card-image' src={producto.img} />
                </div>
                <Card.Body className='Card-body'>
                    <Card.Title>{producto.producto}</Card.Title>
                    <Card.Text>Precio: ${producto.precio}</Card.Text>
                    <Link className='btn btn-primary' to={`/item/${producto.id}`}>Ver detalle</Link>
                    <ItemCount producto={producto} />
                </Card.Body>
            </Card>
        </div>
    );
}

export default ItemCard;
