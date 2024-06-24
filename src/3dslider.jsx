import React from 'react';
import './3dslider.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect, } from 'react';
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
  useEffect(() => { Aos.init(); }, []);
  return (
    <section className="threeDSlider-section">
      <div className="threeDSlider-banner">
        <div className="threeDSlider-slider" style={{ '--quantity': 10 }} data-aos="zoom-in" data-aos-duration="000" data-aos-delay="2300">
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
          <h1 data-content="Player" data-aos="fade-right" data-aos-duration="2000">Player</h1>
          <div className="threeDSlider-author">
            <h2 data-aos="fade-right" data-aos-duration="2000">Game Pedia</h2>
            <p data-aos="fade-right" data-aos-duration="2000"><b>One Universe</b></p>
            <p data-aos="fade-right" data-aos-duration="2000">Gamer Path</p>
          </div>
          <div className="threeDSlider-model" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000" style={{ backgroundImage: `url(${modelImg})` }}></div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDSlider;
