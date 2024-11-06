import chef from '../../../public/assets/icon2.png';
import '../Nosotros/Nosotros.scss'

const Nosotros = () => {
    return (
        <div className='backg'>
            <div className='content'>
                <div className='text'>
                    <strong><h1>ACERCA DE NOSOTROS</h1>
                    <p>
                    En Neigborsales, creemos que cada compra es más que una simple transacción; es el inicio de una nueva historia en un nuevo hogar. Nos dedicamos a conectar a nuestra comunidad con productos de calidad, ofreciendo una experiencia de compra cercana y confiable. Desde productos esenciales hasta aquellos que hacen especial tu espacio, cada artículo que encuentras aquí está esperando encontrar su lugar contigo.                    </p>
                    <p>
                    Nuestro lema, "Donde cada venta consigue un nuevo hogar", representa nuestro compromiso de brindar una experiencia única que va más allá de una compra en línea: queremos que sientas que estás comprando en tu vecindario, rodeado de familiaridad, confianza y satisfacción.                    </p>
                   
                    <p>
                    ¡Gracias por ser parte de Neigborsales!
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
