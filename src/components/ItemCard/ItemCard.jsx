import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemCard.scss"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemCard = ({producto}) => {

    return (
      <div className='ItemCard'>
        <Card style={{ width: '20rem' }}>
          <Card.Img className="Card-img" variant="top" src={producto.img} />
          <Card.Body>
            <Card.Title>{producto.producto}</Card.Title>
            <Card.Text>{producto.descripcion}</Card.Text>
            <Card.Text>Precio: ${producto.precio}</Card.Text>
            <Button variant="danger">Agregar a carrito</Button>
          </Card.Body>
        </Card>
      </div>
    )
}

export default ItemCard
