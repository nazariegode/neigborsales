import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import productos from '../../data/MOCK_DATA'

const ItemListContainer = () => {
    const { categoria } = useParams()


    const getProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        } else {
            reject(new Error("No hay datos para mostrar"))
        }
    })

    getProductos
        .then((res) => {
        })
        .catch((error) => {
            console.log(error)
        })


    const filteredProducts = productos.filter((producto) => producto.categoria === categoria)
    return (
        <>
            {
                categoria ? <ItemList productos={filteredProducts} /> : <ItemList productos={productos} />
            }

        </>
    )
}

export default ItemListContainer