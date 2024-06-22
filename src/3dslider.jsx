import React from 'react';
import './3dslider.css';

import img1 from './images/The_Witcher_3_Wild_Hunt_Geralt_Ciri_RGB.jpg';
import img2 from './images/Division.webp';
import img3 from './images/images (2).jpg';
import img4 from './images/chainsawman.jpg';
import img5 from './images/chainsawman2.jpg';
import img6 from './images/forza2.jpg';
import img7 from './images/binding.jpg';
import img8 from './images/kimitsu.jpg';
import img9 from './images/dragon_9.jpg';
import img10 from './images/dragon_10.jpg';
import modelImg from './images/pngwing.com.png';

const ThreeDSlider = () => {
  return (
    <section className="threeDSlider-section">
      <div className="threeDSlider-banner">
        <div className="threeDSlider-slider" style={{ '--quantity': 10 }}>
          <div className="threeDSlider-item" style={{ '--position': 1 }}>
            <img src={img1} alt="" />
          </div>
          <div className="threeDSlider-item" style={{ '--position': 2 }}>
            <img src={img2} alt="" />
          </div>
          <div className="threeDSlider-item" style={{ '--position': 3 }}>
            <img src={img3} alt="" />
          </div>
          <div className="threeDSlider-item" style={{ '--position': 4 }}>
            <img src={img4} alt="" />
          </div>
          <div className="threeDSlider-item" style={{ '--position': 5 }}>
            <img src={img5} alt="" />
          </div>
          <div className="threeDSlider-item" style={{ '--position': 6 }}>
            <img src={img6} alt="" />
          </div>
          <div className="threeDSlider-item" style={{ '--position': 7 }}>
            <img src={img7} alt="" />
          </div>
          <div className="threeDSlider-item" style={{ '--position': 8 }}>
            <img src={img8} alt="" />
          </div>
          <div className="threeDSlider-item" style={{ '--position': 9 }}>
            <img src={img9} alt="" />
          </div>
          <div className="threeDSlider-item" style={{ '--position': 10 }}>
            <img src={img10} alt="" />
          </div>
        </div>
        <div className="threeDSlider-content">
          <h1 data-content="Player">Player</h1>
          <div className="threeDSlider-author">
            <h2>Game Pedia</h2>
            <p><b>One Universe</b></p>
            <p>Gamer Path</p>
          </div>
          <div className="threeDSlider-model" style={{ backgroundImage: `url(${modelImg})` }}></div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDSlider;
