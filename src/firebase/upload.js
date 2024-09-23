import MOCK_DATA from '../data/MOCK_DATA.json' assert { type: 'json' }
import { collection, addDoc } from 'firebase/firestore'
import { db } from './config.js'

const productosRef = collection(db, "productos");

const uploadData = async () => {
  for (const item of MOCK_DATA) {
    delete item.id; // Asegúrate de que no hay un campo 'id' en el JSON

    try {
      await addDoc(productosRef, item);
      console.log(`Producto agregado: ${JSON.stringify(item)}`);
    } catch (error) {
      console.error("Error al agregar el producto: ", error);
    }
  }
};

// Llama a la función para cargar los datos
uploadData();
