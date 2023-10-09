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
    const existingItem = cart.find((prod) => prod.id === item.id);

    if (existingItem) {
      // Si el producto ya existe en el carrito, actualiza la cantidad
      setCart((prevCart) =>
        prevCart.map((prod) =>
          prod.id === item.id ? { ...prod, cantidad: prod.cantidad + 1 } : prod
        )
      );
    } else {
      // Si el producto no existe en el carrito, agrégalo
      setCart([...cart, { ...item, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (id, eliminarCompleto) => {
    const itemIndex = cart.findIndex((prod) => prod.id === id);
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      if (eliminarCompleto) {
        updatedCart.splice(itemIndex, 1); // Eliminar el producto completamente
      } else {
        updatedCart[itemIndex].cantidad -= 1;
        if (updatedCart[itemIndex].cantidad === 0) {
          updatedCart.splice(itemIndex, 1); // Eliminar el producto si la cantidad es 0
        }
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
    eliminarTodosDelCarrito, // Agregar la nueva función
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
