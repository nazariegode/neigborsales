import React from 'react';
import Cards from '../Carrousel/cardsHome';
import Home from '../Home/Home';
import Help from '../Help/Help';


const Main = () => {

  return (
    <>
      
      <div>
        <Home/>
        <Cards />
        <Help/>
      </div>
    </>
  );
};

export default Main;
