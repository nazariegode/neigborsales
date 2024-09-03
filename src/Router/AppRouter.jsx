import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import Nosotros from "../components/Nosotros/Nosotros";
import Home from '../components/Home/Home'
import Checkout from '../components/Checkout/Checkout'; 

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/nosotros" element={<Nosotros />} />
      <Route exact path="/productos" element={<ItemListContainer category="todos los productos" />} />
      <Route exact path="/productos/:category" element={<ItemListContainer />} />
      <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default AppRouter;
