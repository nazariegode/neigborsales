import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({ productos }) => {
    const { id } = useParams()


    const filteredProducts = productos.filter((producto) => producto.id == id)

    return (
        <div>
            {filteredProducts.map((producto) => {

                return (
                    <div key={producto.id}>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img className="Card-img" variant="top" src={producto.img} />
                            <Card.Body className='Card-body'>
                                <Card.Title>{producto.producto}</Card.Title>
                                <Card.Text>{producto.descripcion}</Card.Text>
                                <Card.Text>Precio: ${producto.precio}</Card.Text>
                            </Card.Body>
                            <ItemCount />
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default React.memo(ItemDetail);