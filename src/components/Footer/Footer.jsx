import React from 'react';
import './Footer.scss';
import 'font-awesome/css/font-awesome.min.css'; // Importa la hoja de estilos de Font Awesome



const Footer = () => {
    return (
      <footer className="pie-pagina">
        <div className="grupo-1">
          <div className="box">
            <h2>Sobre Nosotros</h2>
            <p>Somos especialistas en generar una fusión de sabores. Estamos completamente identificados con comer = felicidad</p>
          </div>
  
          <div className="box">
            <h2>Síguenos</h2>
            <div className="red-social">
              <a href="https://www.instagram.com/nazarisushi/?hl=es" target="_blank" className="fa fa-instagram"></a>
              <a href="https://ms-my.facebook.com/dnazariego/" target="_blank" className="fa fa-facebook"></a>
              <a href="https://wa.me/56964040431" target="_blank" className="fa fa-whatsapp"></a>
            </div>
          </div>
  
          <div className="box">
            <h2>Únete a nuestro newsletter</h2>
            <form action="">
              <label htmlFor="email"> Ingresa tu email </label>
              <br />
              <input type="email" name="email" placeholder="Ingresa tu email aquí" />
              <button type="submit" className="btn"> Unirme</button>
            </form>
          </div>
        </div>
  
        <div className="grupo-2">
          <small>2023 <b>Nazarisushi</b> - Todos los Derechos Reservados.</small>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  