import React from 'react';
import './home2.css'; // Assuming you move your CSS here

const CarouselItem = ({ imageSrc, author, title, topic }) => (
  <div className="item">
    <img src={imageSrc} alt="" />
    <div className="content">
      <div className="author">{author}</div>
      <div className="title">{title}</div>
      <div className="topic">{topic}</div>
      <div className="buttons">
        <button>Play</button>
        <button>More</button>
      </div>
    </div>
  </div>
);

const Carousel = () => {
  const items = [
    { imageSrc: "images/division.jpg", author: "GamePedia", title: "A Game Academy", topic: "Home" },
    // Add other items similarly...
  ];

  return (
    <div className="carousel">
      <div className="list">
        {items.map((item, index) => (
          <CarouselItem key={index} {...item} />
        ))}
      </div>
      {/* Thumbnail section and other elements remain unchanged */}
    </div>
  );
};

export default Carousel;
