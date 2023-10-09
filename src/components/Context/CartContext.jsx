import { useState, createContext, useContext, useEffect } from "react";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Al cargar el componente, intenta obtener el carrito almacenado en localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    // Cada vez que el carrito cambie, actualiza el localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const agregarAlCarrito = (item) => {
    setCart([...cart, item]);
  };

  const eliminarDelCarrito = (id) => {
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
