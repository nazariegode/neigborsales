import React from 'react'
import ItemCard from '../ItemCard/ItemCard'
import './ItemList.scss'

const ItemList = ({ productos }) => {

    return (
        <div className='Flex'> 
            <div className="container">
                {
                    productos.map((producto) => (
                        <ItemCard key={producto.id} producto={producto}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ItemList
