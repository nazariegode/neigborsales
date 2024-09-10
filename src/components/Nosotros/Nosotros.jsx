import chef from '../../assets/chef.jpeg';
import '../Nosotros/Nosotros.scss'

const Nosotros = () => {
    return (
        <div className='backg'>
            <div className='content'>
                <div className='text'>
                    <strong><h1>ACERCA DE NOSOTROS</h1>
                    <p>
                        En NAZARISUSHI, creemos en la magia de la comida japonesa auténtica. Con pasión y dedicación, hemos traído los sabores tradicionales del Japón a tu mesa, permitiéndote disfrutar de una experiencia culinaria única.
                    </p>
                    <p>
                        Nuestra historia comenzó con un amor profundo por el sushi, sashimi y otras delicias japonesas. Desde entonces, nos hemos comprometido a servir platos excepcionales elaborados con los ingredientes más frescos y la técnica más precisa.
                    </p>
                    <p>
                        Te invitamos a explorar nuestra variada carta de sushi, desde los rollos clásicos hasta creaciones innovadoras. Cada visita a nuestro restaurante es una oportunidad para disfrutar de una deliciosa comida en un ambiente acogedor y relajado.
                    </p>
                    <p>
                        ¡Bienvenido a NAZARISUSHI!
                    </p></strong>
                </div>
                <div className='image'>
                    <img src={chef} alt="Chef" />
                </div>
            </div>
        </div>
    )
}

export default Nosotros;
