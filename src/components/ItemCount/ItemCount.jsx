import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Close from '../Close/Close';

const ItemCount = () => {
    const [contador, setContador] = useState(0)

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1);
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
                <Button variant="secondary" onClick={() => setCarrito(carrito)}>Agregar a carrito</Button>
            </ButtonGroup>
        </>
    )
}

export default ItemCount
