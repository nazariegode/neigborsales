import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../ItemDetail/ItemDetail.scss';

const ItemDetail = ({ productos }) => {
    const { id } = useParams();

    const filteredProducts = productos.filter((producto) => producto.id == id);

    return (
        <div className='bkg'>
            {filteredProducts.map((producto) => (
                <div className='card-detail  p-4' key={producto.id}>
                    <div className="row g-4 align-items-center">
                        <div className="col-md-5">
                            <Card.Img className="card-img img-fluid rounded" variant="top" src={producto.img} />
                        </div>
                        <div className="col-md-7">
                            <Card.Body className='card-body'>
                                <Card.Title className="h2 mb-2"><strong>{producto.producto}</strong></Card.Title>
                                <Card.Text className="">{producto.descripcion}</Card.Text>
                                <Card.Text className="text-success h5">Precio: ${producto.precio}</Card.Text>
                                <div className=" w-100">
                                    <ItemCount producto={producto} />
                                </div>
                            </Card.Body>
                        </div>
                    </div>
                </div>
            ))}
            <div className="text-center">
            <Link to={`/productos/`} className="btn btn-outline-primary w-50">Volver a la categoría</Link>
            </div>
        </div>
    );
}

export default React.memo(ItemDetail);
