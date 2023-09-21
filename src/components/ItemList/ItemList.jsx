import React from 'react'
import Item from '../ItemCard/ItemCard'

const ItemList = ({ productos }) => {

    return (
        <div>
            {
                productos.map((p) => {
                    return (
                        <>
                            <Item producto={p} key={p.id}
                            />
                        </>
                    )
                })
            }
        </div>
    )
}


export default ItemList