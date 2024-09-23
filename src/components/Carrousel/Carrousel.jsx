import Carousel from 'react-bootstrap/Carousel';
import './Carrousel.scss';
import card1 from '/assets/card1.JPG';  // Importa las imágenes correctamente
import card2 from '/assets/card2.JPG';
import card3 from '/assets/card3.JPG';

function DarkVariantExample() {
  return (
    <div className='carrousel-container'>
      <Carousel data-bs-theme="dark">
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={card1}
            alt="Ceviche Fusion Roll"
          />
          <Carousel.Caption>
            <h5>Ceviche Fusion Roll</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={card2}
            alt="Avocado Roll"
          />
          <Carousel.Caption>
            <h5>Avocado Roll</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={card3}
            alt="Chesse Roll"
          />
          <Carousel.Caption>
            <h5>Cheese Roll</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
