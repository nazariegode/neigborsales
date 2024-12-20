import React, { useState } from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore"; // Importa métodos de Firestore
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Por favor ingresa un email válido.');
      clearMessageAfterDelay();
      return;
    }

    try {
      // Crea una referencia a la colección "newsletters"
      const newsletterRef = collection(db, "newsletters");

      // Agrega un nuevo documento con el email a Firestore
      await addDoc(newsletterRef, { email });

      // Enviar correo de bienvenida usando EmailJS
      const serviceID = 'service_cph229d';
      const templateID = 'template_gomrqcd';
      const userID = 'OAiBWamp4N_-lGVvl'; // Tu usuario de EmailJS

      // Parámetros que se van a enviar al template de EmailJS
      const templateParams = {
        user_email: email, // El email del usuario registrado
        message: 'Gracias por suscribirte a nuestro newsletter. ¡Estamos muy felices de tenerte con nosotros!'
      };

      emailjs.send(serviceID, templateID, templateParams, userID)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setMessage('Gracias por suscribirte a nuestro newsletter. ¡Te hemos enviado un correo de confirmación!');
        }, (err) => {
          console.log('FAILED...', err);
          setMessage('Hubo un error al enviar el correo. Intenta de nuevo más tarde.');
        });

      setEmail('');  // Limpiar el campo del email
    } catch (error) {
      setMessage('Ocurrió un error al intentar suscribirte. Inténtalo nuevamente más tarde.');
    }
    clearMessageAfterDelay();
  };

  // Función para borrar el mensaje después de 3 segundos
  const clearMessageAfterDelay = () => {
    setTimeout(() => {
      setMessage('');
    }, 3000); // 3 segundos
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-box">
          <h2>Sobre Nosotros</h2>
          <p>
            En Neigborsales, cada compra es el inicio de una nueva historia. Nos dedicamos a conectar a nuestra comunidad con productos de calidad, creando una experiencia cercana y confiable. Queremos que sientas que compras en tu propio vecindario.
          </p>
        </div>

        <div className="footer-box">
          <h2>Síguenos</h2>
          <div className="social-media">
            <a href="https://www.instagram.com/neigborsales/?hl=es" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
            <a href="https://ms-my.facebook.com/dnazariego/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} size="1x" />
            </a>
            <a href="https://wa.me/56964040431" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} size="1x" />
            </a>
          </div>
        </div>

        <div className="footer-box">
          <h2>Únete a nuestro newsletter</h2>
          <form className="newsletter" onSubmit={handleSubmit}>
            <label htmlFor="email" className="form-label">Ingresa tu email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Ej: pedroperez@gmail.com"
              className="form-input"
              required
            />
            <button type="submit" className="btn-news">Unirme</button>
          </form>
          {message && <p className="confirmation-message">{message}</p>}
        </div>
      </div>

      <div className="footer-bottom row">
        <small>2024 <b>Neigborsales</b> - Todos los Derechos Reservados.</small>
        <small>Página web diseñada por <b>David Nazariego</b></small>
      </div>
    </footer>
  );
};

export default Footer;
