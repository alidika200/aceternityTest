import React from 'react';
import './LandingPage.css';
import { FlipWords } from './components/ui/flip-words';
import ThreeDSlider from './3dslider';


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
        <FlipWords words={['ali', 'hassan']} />
      </div>
      <div >
        <ThreeDSlider />
      </div>
    
      <div className="section" id="section4">Section 4</div>
    </>
  );
};

export default LandingPage;
