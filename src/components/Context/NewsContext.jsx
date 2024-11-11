import React, { createContext, useContext, useState } from "react";
import { database } from "firebase/config";
import { ref, push } from "firebase/database"; // Importa métodos para añadir datos a la Realtime Database

const NewsContext = createContext();

export const useNewsContext = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const suscribirNewsletter = async (email) => {
    try {
      const emailRef = ref(database, "newsletters"); // Crea una referencia a la ubicación de los correos
      await push(emailRef, { email }); // Guarda el correo en la base de datos
      setMessage("Gracias por suscribirte a nuestro newsletter. ¡Te hemos enviado un correo de confirmación!");
    } catch (error) {
      setMessage("Ocurrió un error al suscribirte. Inténtalo más tarde.");
      console.error("Error al suscribir al newsletter:", error);
    }
  };

  return (
    <NewsContext.Provider value={{ suscribirNewsletter, message, setMessage }}>
      {children}
    </NewsContext.Provider>
  );
};
