import Carousel from "react-bootstrap/Carousel";

export default function CarrouselCmp() {
  return (
    <div className="container mb-3">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s.yimg.com/ny/api/res/1.2/E7laI2RKh5EPBDFO3NXq6g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ3Nw--/https://s.yimg.com/uu/api/res/1.2/cgf._bZWNyuziq6ie5CUIg--~B/aD04ODQ7dz0xMTg2O2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/5f2acfff720e9a2c822eaa0b4f37e3dd"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Perrito Feliz</h3>
            <p>Perrito Sonriendo</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://petslife.com.mx/wp-content/uploads/2020/11/perritos.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Perrito Saludando</h3>
            <p>Perrito diciendo hola</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
