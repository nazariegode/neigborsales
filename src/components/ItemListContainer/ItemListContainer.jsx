import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import spinner from '../../../spinner.gif';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/config";

const ItemListContainer = () => {
    const { category } = useParams();

    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const timeout = setTimeout(() => {
                    setLoading(false);
                }, 10000); 

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

                clearTimeout(timeout);

                setProductosFiltrados(productos);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
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
                        backgroundColor: "#ffff"
                    }}
                >
                    <img src={spinner} alt="Loading..." style={{ width: '300px', height: '300px' }} />
                </div>
            ) : (
                <ItemList productos={productosFiltrados} category={category} />
            )}
        </div>
    );
};

export default ItemListContainer;
