import React from 'react';
import './LandingPage.css';
import { FlipWords } from './components/ui/flip-words';
import ThreeDSlider from './3dslider';
import Slider3 from './landingsec3';
import MyComponent from './landingsec1';
import {StickyScroll} from './components/ui/sticky-scroll-reveal';


// Add smooth scroll functionality
document.addEventListener('wheel', function(event) {
  const sections = document.querySelectorAll('.section');
  let currentSectionIndex = 0;

  sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top === 0) {
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
  return (
    <>
  <div className="section" id="section1">
        <MyComponent />
        </div>
    
      <div className="section" id="section1">
        <span style={{ fontSize: '2em', fontWeight: 'bold' }}>
          A Website built for <FlipWords words={['Gamers', 'Developers', 'Artists', 'Everyone']} /> One United EcoSystem
        </span>
        </div>
      <div >
        <ThreeDSlider />
      </div>
    
      <div className="section" id="section4"><Slider3 /></div>
    </>
  );
};
export default LandingPage;
