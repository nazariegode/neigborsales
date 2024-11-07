import React from "react";
import "./cardsHome.scss";
import facil from "/assets/Facil.svg?url";
import sostenibilidad from "/assets/sostenibilidad.svg?url";
import Unicos from "/assets/Unicos.svg?url";

function Cards() {
  return (
    <div className="cardshome row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
          <img src={Unicos} alt="facil" className="card-image" />
            <h5 className="card-titulo">Productos Únicos y Asequibles</h5>
            <p className="card-texto">
              Una venta de garage es ideal para encontrar artículos raros, de
              segunda mano, o únicos a precios accesibles.
              Encuentra artículos con historia a precios que no romperán el banco.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <img src={sostenibilidad} alt="facil" className="card-image" />
            <h5 className="card-titulo">Sostenibilidad y Compra Consciente</h5>
            <p className="card-texto">
              Comprar de segunda mano contribuye a la sostenibilidad al reducir
              el consumo de productos nuevos, lo cual es ideal para consumidores
              interesados en la ecología.
            </p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <img src={facil} alt="facil" className="card-image" />
            <h5 className="card-titulo">Conveniencia y Compra Fácil</h5>
            <p className="card-texto">
              Al trasladar la experiencia de una venta de garage a un formato en
              línea, los compradores pueden explorar y adquirir productos desde
              la comodidad de su hogar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
