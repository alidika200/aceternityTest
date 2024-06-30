import React, { useEffect } from 'react';
import './LandingPage.css';
import { FlipWords } from './components/ui/flip-words';
import ThreeDSlider from './3dslider';
import Slider3 from './landingsec3';
import MyComponent from './landingsec1';
import { StickyScrollRevealDemo } from './StickySS';
import F3 from './stickyScrollSec';
import mac from './assets/pngwing.com.png';
import { MacbookScrollDemo } from './components/ui/mcscroll';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Add smooth scroll functionality
document.addEventListener('wheel', function(event) {
  const sections = document.querySelectorAll('.section');
  let currentSectionIndex = 0;

  sections.forEach((section, index) => {
    // Using a threshold of 1 to detect current section more reliably
    if (Math.abs(section.getBoundingClientRect().top) < 1) {
      currentSectionIndex = index;
    }
  });

  if (event.deltaY > 0) {
    if (currentSectionIndex < sections.length - 1) {
      sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    if (currentSectionIndex > 0) {
      sections[currentSectionIndex - 1].scrollIntoView({ behavior: 'smooth' });
    }
  }
});

const LandingPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="section" id="section0">
        <MyComponent />
      </div>
      <div className="section" id="section1">
        <div data-aos="fade-right" data-aos-duration="200" data-aos-delay="800">
          <span style={{ fontSize: '2em', fontWeight: 'bold' }}>
            A Website built for <FlipWords words={['Gamers', 'Developers', 'Artists', 'Everyone']} /> One United EcoSystem
          </span>
        </div>
      </div>
      <div>
        <F3 />
      </div>
      <div className="section" id="section4">
        <Slider3 />
      </div>
      <div>
        <ThreeDSlider />
      </div>
      <div className="section" id="section3">
        <h1 data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">Turn in to reality</h1>
        <h1 data-aos="fade-left" data-aos-duration="800" data-aos-delay="500" className='aa'>Path Of the Creator</h1>
        <div>
          <img src={mac} alt="Mac" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="1200" />
        </div>
      </div>
      <div className="section" id="section12">
     
      </div>
    </>
  );
};

export default LandingPage;
