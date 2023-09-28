import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import productos from '../../data/MOCK_DATA';

const ItemListContainer = () => {
    const { category } = useParams();

    const [productosFiltrados, setProductosFiltrados] = useState([]);

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
                })
                .catch((error) => {
                    console.error(error);
                });
    }, [category]);

    return (
        <div>
            <ItemList productos={productosFiltrados} category={category} />
        </div>
    );
};

export default ItemListContainer;
