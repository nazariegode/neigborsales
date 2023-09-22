import React from 'react';
import fondo from '../../assets/fondo.png';
import './Home.scss'

const Home = () => {
  
    return (
    <div>
        <h1 className='bienvenida'>Bienvenidos a</h1>
        <h1 className='bienvenida2'>Nazari SUSHI</h1>
        <img src={fondo} alt="" style={{ width: '100%' }} />
    </div>
  )
}

export default Home;
