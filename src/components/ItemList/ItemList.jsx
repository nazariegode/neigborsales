import React from 'react'
import ItemCard from '../ItemCard/ItemCard'
import './ItemList.scss'

const ItemList = ({ productos, category }) => {
    const productosFiltrados = productos.filter((producto) => producto.categoria === category);

    return (
        <div className='Flex'> 
            <div className="container">
                {
                    productosFiltrados.map((producto) => (
                        <ItemCard key={producto.id} producto={producto}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ItemList
