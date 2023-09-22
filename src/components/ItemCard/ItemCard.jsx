import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemCard.scss"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemCard = ({producto}) => {

    return (
      <div className='ItemCard' >
        <Card className="ItemContent" style={{ width: '20rem' }}>
          <Card.Img className="Card-img" variant="top" src={producto.img} />
          <Card.Body className='Card-body'>
            <Card.Title>{producto.producto}</Card.Title>
            <Card.Text>{producto.descripcion}</Card.Text>
            <Card.Text>Precio: ${producto.precio}</Card.Text>
            <Button className="Button" variant="outline-danger">Agregar a carrito</Button>
          </Card.Body>
        </Card>
      </div>
    )
}

export default ItemCard
