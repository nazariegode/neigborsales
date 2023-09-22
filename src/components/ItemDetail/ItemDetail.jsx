import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Center } from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ productos }) => {
    const { id } = useParams()


    const filteredProducts = productos.filter((producto) => producto.id == id)

    return (
        <div>
            {filteredProducts.map((producto) => {

                return (
                    <div key={producto.id}>
                        <Center p='1rem'>

                            <Card>
                                <CardHeader>
                                    <Heading size='md'>{producto.producto}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>{producto.description}</Text>
                                    <Text>{producto.category}</Text>
                                </CardBody>
                                <CardFooter>
                                    <ItemCount />
                                </CardFooter>
                            </Card>
                        </Center>
                    </div>
                )
            })}
        </div>
    )
}

export default React.memo(ItemDetail);