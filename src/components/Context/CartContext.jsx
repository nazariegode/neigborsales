import { useState, createContext, useContext, useEffect } from "react";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(storedCart); // Verifica que todos los productos tengan `img`
    setCart(storedCart);
  }, []);
  

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const agregarAlCarrito = (item) => {
    console.log(item); // Verifica que `img`, `producto`, y `precio` están en `item`
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
  };
  

  const eliminarDelCarrito = (id, eliminarCompleto) => {
    const itemIndex = cart.findIndex((prod) => prod.id === id);
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      if (eliminarCompleto) {
        updatedCart.splice(itemIndex, 1);
      } else {
        updatedCart[itemIndex].cantidad -= 1;
        if (updatedCart[itemIndex].cantidad === 0) {
          updatedCart.splice(itemIndex, 1); 
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
