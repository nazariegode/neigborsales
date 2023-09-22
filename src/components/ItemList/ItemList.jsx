import React from 'react'
import ItemCard from '../ItemCard/ItemCard'
import './ItemList.scss'
const ItemList = ({ productos }) => {

    return (
        <div className='Flex'> 
            {
                productos.map((producto) => {
                    return (
                    
                            <ItemCard key={producto.id} producto={producto}/>
                        
                    )
                })
            }
        </div>
    )
}


export default ItemList