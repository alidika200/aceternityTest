import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselComponent.css';

const CarouselComponent = ({game1,game2,game3,phrase2 ,phrase3,  image1, image2, image3 }) => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      useKeyboardArrows
      autoPlay
      showStatus={false}
      showArrows={false}
      renderArrowPrev={() => null}
      renderArrowNext={() => null}
    >
      <div className="carousel-slide" style={{ backgroundImage: `url(${image1})` }}>
        <div className="carousel-caption">
          <div className="game-info">
            <h3>{game1}</h3>
            <p>Cd Project Red</p>
          </div>
          <p className="dlc-notice">Steel For Humans, Silver for  <span className="highlight1">Monsters</span></p>
          <button className="buy-now-btn1">Buy Now</button>
        </div>
      </div>
      <div className="carousel-slide" style={{ backgroundImage: `url(${image2})` }}>
        <div className="carousel-caption">
          <div className="game-info">
            <h3>{game2}</h3>
            <p>Ubisoft, Massive</p>
          </div>
          <p className="dlc-notice">New <span className="highlight">DLC</span> Arrived</p>
          <button className="buy-now-btn2">Buy Now</button>
        </div>
      </div>
      <div className="carousel-slide" style={{ backgroundImage: `url(${image3})` }}>
        <div className="carousel-caption">
          <div className="game-info">
            <h3>{game3}</h3>
            <p>Sony</p>
          </div>
          <p className="dlc-notice">New <span className="highlight">DLC</span> Arrived</p>
          <button className="buy-now-btn3">Buy Now</button>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
