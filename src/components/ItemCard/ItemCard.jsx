import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCard.scss';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemCard = ({ producto }) => {
    return (
        <div className='ItemCard' key={producto.id}>
            <Card className="ItemContent">
                <Card.Img className="Card-image" src={producto.img}/>
                <Card.Body className='Card-body'>
                    <Card.Title>{producto.producto}</Card.Title>
                    <Card.Text>Precio: ${producto.precio}</Card.Text>
                    <Link className='btn' to={`/item/${producto.id}`}>Ver detalle</Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ItemCard;
