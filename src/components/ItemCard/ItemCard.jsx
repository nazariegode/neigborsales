import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemCard = ({id, nombre, precio, descripcion, img}) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={nombre}/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>Precio: ${precio}</Card.Text>
                <Button variant="primary" to={`/detail/${id}`}>Ver más</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemCard

