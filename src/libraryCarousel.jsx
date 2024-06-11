import React, { useState } from 'react';
import './LibraryCarousel.css';
import divisionImage from './assets/division.jpg';
import profilePic from './assets/shitpost.jpg';
import witcherImage from './assets/wicherCover.jpg';
import cyberpunkImage from './assets/wall1.jpg';
import breakImage from './assets/wall1.jpg';
import whoImage from './assets/wall3.jpg';
import Header from './Layout';
import SideNav from './dropDownNavBar';
import { AppstoreOutlined, AppstoreFilled } from '@ant-design/icons';

const LibraryCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: divisionImage, author: 'Ubisoft, Massive', title: "Tom Clancy's", topic: 'The Division' },
    { image: witcherImage, author: 'Cd Project Red', title: 'The Witcher 3', topic: 'Wild Hunt' },
    { image: cyberpunkImage, author: 'Cd Project Red', title: 'CyberPunk', topic: '2077' },
    { image: breakImage, author: 'GamePedia', title: 'Take A Break', topic: 'Routine' },
    { image: breakImage, author: 'GamePedia', title: 'Take A Break', topic: 'Routine' },
    { image: whoImage, author: 'GamePedia', title: 'Who are we?', topic: 'Get to know us' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (
    <div className={`carouselLibrary ${currentSlide === 0 ? 'next' : 'prev'}`}>
      <Header playerName="Ali" backgroundImage={profilePic} />
      <SideNav />
      <div className="listLibraryCarousel">
        {slides.map((slide, index) => (
          <div key={index} className={`itemCarouselLibrary ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide.image} alt={slide.title} />
            <div className="contentCarouselLibrary">
              <div className="author">{slide.author}</div>
              <div className="title">{slide.title}</div>
              <div className="topic">{slide.topic}</div>
              <div className="buttons">
                <button>Play</button>
                <button>More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="thumbnail">
        {slides.map((slide, index) => (
          <div key={index} className={`itemCarouselLibrary ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide.image} alt={slide.title} />
          </div>
        ))}
      </div>
      <div className="arrows">
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
        <button id="shape"> <AppstoreFilled /></button>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default LibraryCarousel;
