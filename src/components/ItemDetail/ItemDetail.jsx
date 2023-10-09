import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useParams, Link } from 'react-router-dom'; // Importa Link
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../ItemDetail/ItemDetail.scss';

const ItemDetail = ({ productos }) => {
    const { id, category } = useParams(); // Obtiene el parámetro de la categoría

    const filteredProducts = productos.filter((producto) => producto.id == id)

    return (
        <div className='bkg'>
            {filteredProducts.map((producto) => {

                return (
                    <>
                    <div className='card-detail' key={producto.id}>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img className="Card-img" variant="top" src={producto.img} />
                            <Card.Body className='Card-body'>
                                <Card.Title>{producto.producto}</Card.Title>
                                <Card.Text>{producto.descripcion}</Card.Text>
                                <Card.Text>Precio: ${producto.precio}</Card.Text>
                            </Card.Body>
                            <ItemCount />
                        </Card>
                    </div>,
                    <div>
                        <Link to={`/productos/`} className="btn btn-primary">Volver a la categoría</Link>
                    </div>
                    
                    </>
                )
            })}
        </div>
    )
}

export default React.memo(ItemDetail);
