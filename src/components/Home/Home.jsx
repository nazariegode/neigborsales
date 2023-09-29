import React from 'react';
import fondo from '../../assets/fondo.png';
import './Home.scss'
import Carrousel from '../Carrousel/Carrousel'

const Home = () => {
  
    return (
    <>
      <div>
          <h1 className='bienvenida'>Bienvenidos a</h1>
          <h1 className='bienvenida2'>Nazari SUSHI</h1>
          <img src={fondo} alt="" style={{ width: '100%', height: 'auto' }} />
      </div>

      <div>
          <Carrousel/>
      </div>
    
    </>
  )
}

export default Home;
