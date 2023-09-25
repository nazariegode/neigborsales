import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../data/MOCK_DATA";

const ItemDetailContainer = () => {
  const [productosData, setProductosData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProductosData(productos);
    }, 1000);
  }, []);

  return (
    <>
      <ItemDetail productos={productosData} />
    </>
  );
};

export default ItemDetailContainer;
