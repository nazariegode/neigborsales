import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './config.js';

// Referencia a la colección de productos
const productosRef = collection(db, "productos");

const cargarProductosDesdeFirestore = async () => {
  try {
    // Obtenemos todos los productos desde Firestore
    const querySnapshot = await getDocs(productosRef);
    
    // Recorremos los productos obtenidos
    querySnapshot.forEach((doc) => {
      console.log(`Producto ID: ${doc.id}, Datos: ${JSON.stringify(doc.data())}`);
    });
  } catch (error) {
    console.error("Error al obtener los productos: ", error);
  }
};

// Llamamos a la función para cargar los productos
cargarProductosDesdeFirestore();
