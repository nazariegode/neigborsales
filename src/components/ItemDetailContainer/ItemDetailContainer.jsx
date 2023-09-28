import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../data/MOCK_DATA";

const ItemDetailContainer = () => {
  const [loadingProductos, setLoadingProductos] = useState(true);
  const [productosData, setProductosData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setProductosData(productos);
        setLoadingProductos(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loadingProductos) {
    return <div>Cargando productos...</div>;
  }

  return <ItemDetail productos={productosData} />;
};

export default ItemDetailContainer;
