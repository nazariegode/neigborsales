import { useState, createContext, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './CartContext.scss';


export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const agregarAlCarrito = (item) => {
    const existingItem = cart.find((prod) => prod.id === item.id);
  
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((prod) =>
          prod.id === item.id ? { ...prod, cantidad: prod.cantidad + 1 } : prod
        )
      );
    } else {
      setCart([...cart, { ...item, cantidad: 1 }]);
    }

    // Notificación al agregar al carrito
    toast.success(`${item.producto} ha sido agregado al carrito!`, {
      className: "custom-toast-success custom-toast-responsive",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const eliminarDelCarrito = (id, eliminarCompleto) => {
    const itemIndex = cart.findIndex((prod) => prod.id === id);
    
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      const item = updatedCart[itemIndex];
  
      if (eliminarCompleto) {
        updatedCart.splice(itemIndex, 1);
        // Notificación de eliminación completa con mensaje dinámico
        toast.error(`${item.producto} ha sido eliminado del carrito!`, {
          className: "custom-toast-error custom-toast-responsive",
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        updatedCart[itemIndex].cantidad -= 1;
        if (updatedCart[itemIndex].cantidad === 0) {
          updatedCart.splice(itemIndex, 1);
        }
        // Notificación de eliminación parcial (decremento de cantidad) con mensaje dinámico
        toast.error(`${item.producto} ha sido eliminado del carrito!`, {
          className: "custom-toast-error custom-toast-responsive",
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setCart(updatedCart);
    }
  };
  
  

  const eliminarTodosDelCarrito = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const totalCompra = () => {
    return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const totalCantidad = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const cartContextValues = {
    cart,
    agregarAlCarrito,
    eliminarDelCarrito,
    eliminarTodosDelCarrito,
    isInCart,
    totalCompra,
    totalCantidad,
    vaciarCarrito,
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
};
