import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../ItemDetail/ItemDetail.scss';
import { useCartContext } from '../Context/CartContext'; // Asegúrate de importar el contexto

const ItemDetail = ({ productos }) => {
    const { id } = useParams();
    const { agregarAlCarrito } = useCartContext(); // Importa la función de agregar al carrito
    const [cantidad, setCantidad] = useState(1); // Estado para manejar la cantidad

    const filteredProducts = productos.filter((producto) => producto.id == id);

    const handleAddToCart = () => {
        const productToAdd = { ...filteredProducts[0], cantidad }; // Crea un objeto con la cantidad
        agregarAlCarrito(productToAdd); // Agrega el producto al carrito
    };

    return (
        <div className='bkg'>
            {filteredProducts.map((producto) => (
                <div className='card-detail p-4' key={producto.id}>
                    <div className="row g-4 align-items-center">
                        <div className="col-md-5">
                            <Card.Img className="card-img img-fluid rounded" variant="top" src={producto.img} />
                        </div>
                        <div className="col-md-7">
                            <Card.Body className='card-body'>
                                <h2 className="tittle mb-2"><strong>{producto.producto}</strong></h2>
                                <p className="description mb-2">{producto.descripcion}</p>
                                <p className="price">Precio: ${producto.precio}</p>

                                <div className="d-flex align-items-center mb-3">
                                    <button className="btn-quantity" onClick={() => setCantidad(Math.max(cantidad - 1, 1))}>-</button>
                                    <span className="product-quantity mx-2">{cantidad}</span>
                                    <button className="btn-quantity" onClick={() => setCantidad(cantidad + 1)}>+</button>
                                </div>

                                <button className="btn-add mt-3" onClick={handleAddToCart}>
                                    Agregar al carrito
                                </button>
                            </Card.Body>
                        </div>
                    </div>
                </div>
            ))}
            <div className="back-to-shop">
                <Link className="back-to-shop" to="/productos">&larr; Volver a productos</Link>
            </div>
        </div>
    );
}

export default React.memo(ItemDetail);
