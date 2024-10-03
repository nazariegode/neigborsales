import React, { useState } from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [email, setEmail] = useState('');  // Maneja el estado del email
  const [message, setMessage] = useState('');  // Estado para el mensaje de confirmación

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
      const response = await fetch('/api/send-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Gracias por suscribirte a nuestro newsletter. ¡Te hemos enviado un correo de confirmación!');
        setEmail('');  // Limpiar el campo del email
      } else {
        setMessage('Ocurrió un error al intentar suscribirte. Inténtalo nuevamente más tarde.');
      }
    } catch (error) {
      setMessage('Ocurrió un error. Por favor intenta nuevamente.');
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
            Somos especialistas en generar una fusión de sabores. Estamos
            completamente identificados con comer es igual a felicidad.
          </p>
        </div>

        <div className="footer-box">
          <h2>Síguenos</h2>
          <div className="social-media">
            <a
              href="https://www.instagram.com/nazarisushi/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
            <a
              href="https://ms-my.facebook.com/dnazariego/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="1x" />
            </a>
            <a
              href="https://wa.me/56964040431"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="1x" />
            </a>
          </div>
        </div>

        <div className="footer-box">
          <h2>Únete a nuestro newsletter</h2>
          <form className="newsletter" onSubmit={handleSubmit}>
            <label htmlFor="email" className="form-label">
              Ingresa tu email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Ej: pedroperez@gmail.com"
              className="form-input"
              required
            />
            <button type="submit" className="btn-news">
              Unirme
            </button>
          </form>
          {message && <p className="confirmation-message">{message}</p>}
        </div>
      </div>

      <div className="footer-bottom">
        <small>
          2023 <b>Nazarisushi</b> - Todos los Derechos Reservados.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
