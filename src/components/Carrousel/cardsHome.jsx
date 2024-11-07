import React from "react";
import "./cardsHome.scss";
import facil from "/assets/Facil.svg?url";
import sostenibilidad from "/assets/sostenibilidad.svg?url";
import Unicos from "/assets/Unicos.svg?url";

function Cards() {
  return (
    <div className="cards-container row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <div className="card-body text-center">
            <img src={Unicos} alt="productos-unicos" className="card-icon" />
            <h5 className="card-title">Productos Únicos y Asequibles</h5>
            <p className="card-description">
              Una venta de garage es ideal para encontrar artículos raros, de
              segunda mano, o únicos a precios accesibles.
              Encuentra artículos con historia a precios que no romperán el banco.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <div className="card-body text-center">
            <img src={sostenibilidad} alt="sostenibilidad" className="card-icon" />
            <h5 className="card-title">Sostenibilidad y Compra Consciente</h5>
            <p className="card-description">
              Comprar de segunda mano contribuye a la sostenibilidad al reducir
              el consumo de productos nuevos, lo cual es ideal para consumidores
              interesados en la ecología.
            </p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <div className="card-body text-center">
            <img src={facil} alt="compra-facil" className="card-icon" />
            <h5 className="card-title">Conveniencia y Compra Fácil</h5>
            <p className="card-description">
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
