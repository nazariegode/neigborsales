import React from 'react';
import { useNavigate } from 'react-router-dom';
import man from '../../../public/assets/man.png';
import './Home.scss';
import Carrousel from '../Carrousel/Carrousel';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-container">
        <div className="content">
          <div className="image-section">
            <img src={man} alt="man" />
          </div>
          <div className="text-section">
            <h1>Bienvenido a tu vecindario</h1>
            <p>¡Donde cada venta encuentra un nuevo hogar!</p>
            <div className="buttons">
              <button 
                className="btn-primary" 
                onClick={() => navigate('/nosotros')}
              >
                Conócenos
              </button>
              <button 
                className="btn-secondary" 
                onClick={() => navigate('/productos')}
              >
                Productos
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Carrousel />
      </div>
    </>
  );
};

export default Home;
