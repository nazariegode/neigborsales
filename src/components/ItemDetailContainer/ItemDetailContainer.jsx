import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/config";
import spinner from '../../../spinner.gif';

const ItemDetailContainer = () => {
  const [loadingProductos, setLoadingProductos] = useState(true);
  const [productosData, setProductosData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosCollection = collection(db, 'productos');
        const querySnapshot = await getDocs(productosCollection);

        const productos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setProductosData(productos);
        setLoadingProductos(false);
      } catch (error) {
        setError(error);
        setLoadingProductos(false);
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
          backgroundColor: "#ffff"
        }}
      >
        <img src={spinner} alt="Loading..." style={{ width: '200px', height: '200px' }} />
      </div>
    );
  }

  return <ItemDetail productos={productosData} />;
};

export default ItemDetailContainer;
