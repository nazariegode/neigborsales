import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../data/MOCK_DATA";
import Spinner from 'react-bootstrap/Spinner';

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
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#c81c1c"
        }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return <ItemDetail productos={productosData} />;
};

export default ItemDetailContainer;
