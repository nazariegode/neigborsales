import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemCard.scss"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const ItemCard = ({producto}) => {

    return (
      <div className='ItemCard' >
        <Card className="ItemContent" style={{ width: '20rem' }}>
            <Card.Img className="Card-img" variant="top" src={producto.img} />
            <Card.Body className='Card-body'>
                <Card.Title>{producto.producto}</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
                <Card.Text>Precio: ${producto.precio}</Card.Text>
                <Card.Text>Categoria:{producto.category}</Card.Text>
                <Link className='btn' to={`/item/${producto.id}`}>
                  Ver mas
                </Link>
            </Card.Body>
        </Card>
      </div>
    )
}

export default ItemCard
