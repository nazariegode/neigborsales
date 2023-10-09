import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import productos from '../../data/MOCK_DATA';
import Spinner from 'react-bootstrap/Spinner'; // Importa el Spinner

const ItemListContainer = () => {
    const { category } = useParams();

    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para controlar si se está cargando

    useEffect(() => {
        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });

        getProductos
            .then((res) => {
                if (category) {
                    const filtered = res.filter((producto) => producto.category === category);
                    setProductosFiltrados(filtered);
                } else {
                    setProductosFiltrados(res);
                }
                setLoading(false); // Indicar que la carga ha finalizado
            })
            .catch((error) => {
                console.error(error);
            });
    }, [category]);

    return (
        <div>
            {loading ? ( // Mostrar el Spinner si se está cargando
                <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#c81c1c"
        }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>  
                ) : (
                    <ItemList productos={productosFiltrados} category={category} />
                )}
            </div>
    );
};

export default ItemListContainer;
