import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { collection, query, where, getDocs } from 'firebase/firestore'; 
import { db } from "../../firebase/config";

const ItemListContainer = () => {
    const { category } = useParams();

    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productosCollection = collection(db, 'productos'); 
                let querySnapshot;

                if (category) {
                    const q = query(productosCollection, where('category', '==', category));
                    querySnapshot = await getDocs(q);
                } else {
                    querySnapshot = await getDocs(productosCollection);
                }

                const productos = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setProductosFiltrados(productos);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [category]);

    return (
        <div>
            {loading ? (
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
            ) : (
                <ItemList productos={productosFiltrados} category={category} />
            )}
        </div>
    );
};

export default ItemListContainer;
