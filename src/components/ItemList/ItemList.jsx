import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './ItemList.scss';

const ItemList = ({ productos }) => {
    return (
        <div className="container-list">
            {productos.length > 0 ? (
                productos.map((producto) => (
                    <ItemCard key={producto.id} producto={producto} />
                ))
            ) : (
                <div className="empty-list-message">
                    <p className='nocategory'>No hay productos disponibles en esta categoría por el momento.</p>
                </div>
            )}
        </div>
    );
};

export default ItemList;
