import chef from '../../assets/chef.jpeg';
import '../Nosotros/Nosotros.scss'

const Nosotros = () => {
    
    return (
        <div className='backg'>
                <div className='p'>
                <p>ACERCA DE NOSOTROS</p>
                <p>
                En NAZARISUSHI, creemos en la magia de la comida japonesa auténtica. Con pasión y dedicación, hemos traído los sabores tradicionales del Japón a tu mesa, permitiéndote disfrutar de una experiencia culinaria única.
                Nuestra historia comenzó con un amor profundo por el sushi, sashimi y otras delicias japonesas. Desde entonces, nos hemos comprometido a servir platos excepcionales elaborados con los ingredientes más frescos y la técnica más precisa. Cada bocado es una obra maestra cuidadosamente preparada que refleja la tradición y el arte culinario de Japón.
                En NAZARISUSHI, creemos en la autenticidad, la calidad y la hospitalidad. Nuestro equipo de chefs altamente capacitados se esfuerza por llevar la esencia de la cocina japonesa a tu plato, ofreciendo una experiencia gastronómica que te transportará directamente a las calles de Tokio.
                </p>
                <p>
                Te invitamos a explorar nuestra variada carta de sushi, desde los rollos clásicos hasta creaciones innovadoras. Cada visita a nuestro restaurante es una oportunidad para disfrutar de una deliciosa comida en un ambiente acogedor y relajado.
                Nos enorgullece ser tu destino preferido para el sushi en Santiago de Chile. Esperamos verte pronto y compartir contigo la pasión por la comida japonesa que nos impulsa todos los días.
                ¡Bienvenido a NAZARISUSHI!
                </p>
                </div>
                <div className='img'>
                <img src={chef} alt="chef" width={500}/>
                </div>
                    
            </div>
    )
}

export default Nosotros 