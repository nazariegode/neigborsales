import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './ItemCount.scss'; // Importa tus estilos personalizados

const ItemCount = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [contador, setContador] = useState(0);

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  const agregarAlCarritoClick = () => {
    if (contador > 0) {
      const prod = {
        ...producto,
        cantidad: contador
      };
      for (let i = 0; i < contador; i++) {
        agregarAlCarrito(prod);
      }
      setContador(0);
    }
  }

  return (
    <div className="button-container">
      <ButtonGroup aria-label="Basic example">
        <Button className="btn-custom-black" onClick={restar}>Restar</Button>
        <Button variant="secondary">{contador}</Button>
        <Button className="btn-custom-black" onClick={() => setContador(contador + 1)}>Sumar</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Basic example">
        <Button className="btn-custom-black" onClick={agregarAlCarritoClick}>Agregar al carrito</Button>
      </ButtonGroup>
    </div>
  )
}

export default ItemCount;
