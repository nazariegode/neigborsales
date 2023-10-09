import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ItemCount = ({producto}) => {
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
                cantidad:contador
            };
            agregarAlCarrito(prod);
        }
    }

    return (
        <>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={restar}>Restar</Button>
                <Button variant="secondary">{contador}</Button>
                <Button variant="secondary" onClick={() => setContador(contador + 1)}>Sumar</Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={agregarAlCarritoClick}>Agregar a carrito</Button>
            </ButtonGroup>
        </>
    )
}

export default ItemCount;
