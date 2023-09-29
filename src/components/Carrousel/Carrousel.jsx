import Carousel from 'react-bootstrap/Carousel';
import '../Carrousel/Carrousel.scss'

function DarkVariantExample() {
  return (
    <div className='Carrousel'>

    <Carousel data-bs-theme="dark">
        <Carousel.Item className="carousel-item">
              <img
              className="d-block w-10"
              src="../src/assets/card1.JPG"
              alt="First slide"
              />
              <Carousel.Caption>
              <h5>Ceviche Fusion Roll</h5>
              </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
              <img
              className="d-block w-10"
              src="../src/assets/card2.JPG"
              alt="Second slide"
              />
              <Carousel.Caption>
              <h5>Avocado Roll</h5>
              </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
              <img
              className="d-block w-10"
              src="../src/assets/card3.JPG"
              alt="Third slide"
              />
              <Carousel.Caption>
              <h5>Chesse Roll</h5>
              </Carousel.Caption>
        </Carousel.Item>

    </Carousel>

    </div>
  );
}

export default DarkVariantExample;