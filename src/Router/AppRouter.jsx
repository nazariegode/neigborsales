import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../Components/Cart/Cart";
import Nosotros from "../Components/Nosotros/Nosotros";
import Home from '../Components/Home/Home'

const AppRouter = () => {
  return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/nosotros" element={<Nosotros />} />
            <Route exact path="/productos" element={<ItemListContainer/>} />
            <Route exact path="/categoria/:categoria" element={<ItemListContainer/>} />
            <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
  );
};

export default AppRouter;