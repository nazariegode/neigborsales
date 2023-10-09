import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from 'react-bootstrap/Spinner';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
  const [loadingProductos, setLoadingProductos] = useState(true);
  const [productosData, setProductosData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosCollection = collection(db, 'productos'); // Reemplaza 'productos' con el nombre de tu colección en Firestore

        const querySnapshot = await getDocs(productosCollection);
        const productos = [];

        querySnapshot.forEach((doc) => {
          productos.push({
            id: doc.id,
            ...doc.data()
          });
        });

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
