import { useContext } from 'react'
import { CartContext } from "../Context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito} = 
    useContext(CartContext);
    console.log("Cart:", cart);
    console.log("Total de compra:", totalCompra());
    
           
        if (cart.length === 0) {
            return (
                <div className="container my-5">
                    <h2>Tu carrito está vacío</h2>
                    <hr/>
                    <Link className="btn btn-primary" to="/productos">Volver a productos</Link>
                </div>
            )
        }

        return (
            <div className="container my-5">
    
                <h2>Tu compra</h2>
                <hr/>
    
                {
                    cart.map((producto) => (
                        <div key={producto.id}>
                        <h4>{producto.producto}</h4>
                            <img src={producto.img} alt={producto.producto}/>
                            <p>Precio: ${producto.precio}</p>
                            <p>Cantidad: {producto.cantidad}</p>
    
                            <button 
                                className="btn btn-danger"
                                onClick={() => eliminarDelCarrito(producto.id)}
                            >
                                <FaTrashAlt/>
                            </button>
                            <hr/>
                        </div>
                    ))
                }
    
                <div>
                    <h5>Total: ${totalCompra()}</h5>
                    <hr/>
                    <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</button>
                    <Link className="btn btn-success mx-2" to="/checkout">Terminar mi compra</Link>
                </div>
            </div>
        )
    }

export default Cart