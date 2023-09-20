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
            <Route path="/" element={<Home/>}/>
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
  );
};

export default AppRouter;
