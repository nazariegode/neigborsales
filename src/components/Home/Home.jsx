import React from 'react';
import fondo from '../../assets/fondo.png';
import './Home.scss';
import Carrousel from '../Carrousel/Carrousel';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <img src={fondo} alt="Fondo" className="background-image" />
        <div className="text-container">
          <h1 className='bienvenida'>Bienvenidos a</h1>
          <h1 className='bienvenida2'>NazariSUSHI</h1>
        </div>
      </div>

      <div>
        <Carrousel />
      </div>
    </>
  );
};

export default Home;
