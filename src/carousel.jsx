import React, { useState } from 'react';

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + children.length) % children.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Previous</button>
      <div className="carousel-inner">
        {children[currentSlide]}
      </div>
      <button onClick={nextSlide}>Next</button>
      <div className="carousel-indicators">
        {children.map((_, index) => (
          <span key={index} className={currentSlide === index? 'active' : ''}></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
