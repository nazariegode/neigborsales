import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import Nosotros from "../components/Nosotros/Nosotros";
import Main from "../components/Main/Main";
import Checkout from "../components/Checkout/Checkout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route
        path="/productos"
        element={<ItemListContainer category="todos los productos" />}
      />
      <Route path="/productos/:category" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default AppRouter;
