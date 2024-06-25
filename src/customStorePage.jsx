import React, { useState, useEffect } from 'react';
import './customStorePage.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import video from './assets/Cyberpunk Phantom Liberty combat hits way too hard.mp4';
import characterImage from './assets/idrees.png';
import characterImage1 from './assets/v.png';
import pic1 from './assets/v5.jpg'; 
import pic2 from './assets/cyber.webp'; 
import pic3 from './assets/cyber2.jpg'; 
import pic4 from './assets/eyes.jpg';  
import pic5 from './assets/jjj3.jpg'; 
import pic6 from './assets/nightcity.png'; 
import pic7 from './assets/pp1.png'; 
import pic8 from './assets/pp2.png'; 
import pic9 from './assets/pp3.png'; 
import pic10 from './assets/wall55.jpg'; 
import SideNav from './dropDownNavBar';

const CustomStorePage = () => {
  useEffect(() => {
    Aos.init();

    const sections = document.querySelectorAll('.customStore-section');
    let currentSectionIndex = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSectionIndex = [...sections].indexOf(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        if (currentSectionIndex < sections.length - 1) {
          sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        if (currentSectionIndex > 0) {
          sections[currentSectionIndex - 1].scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div>
        {/* <SideNav /> */}
      </div>
      <div className="customStore-section" id="customStore-section0">
        <p className='CustomPagedesc'>Discover The full package CyberPunk 2077, an open world action adventure amdits spy thriller expansion phantom liberty</p>
        <button className='CustomPageBuy'>Buy</button>
      </div>
      <div className="customStore-section" id="customStore-section1">
        <p className="aboutGameText" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">About the game</p>
        <div className='videoAbout'>
          <video src={video} className='cpVideo' autoPlay loop muted data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200"></video>
          <p className='cpAbout' data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            In the Ultimate Edition, immerse yourself in every story the world of the dark future has to offer, featuring every gameplay update and all previously released content in one package — including the acclaimed spy-thriller expansion Phantom Liberty
          </p>
          <p className='catchyphrase' data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            The Ultimate CyberPunk 2077 Experience__
          </p>
        </div>
      </div>
      
      <div className="customStore-section" id="customStore-section5">
        <div className="section5-container">
          <img src={pic6} alt="Large Image" className="section5-image" data-aos="zoom-out" data-aos-duration="800" data-aos-delay="200" />
          <p className="section5-text1" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">Explore The City Of The Future</p>
          <p className="section5-text2" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">Night City is packed to the brim with things to do, places to see, and people to meet. And it's up to you where to go, when to go, and how to get there.</p>
        </div>
      </div>
      <div className="customStore-section" id="customStore-section2">
        <div className='redbg' data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"></div>
        <h1 className='section2-title' data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">Phantom Liberty expansion Content</h1>
        <p className='expansiontext' data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">Phantom Liberty is a new spy-thriller expansion for Cyberpunk 2077. Return as cyber-enhanced mercenary V and embark on a high-stakes mission of espionage and intrigue to save the NUS President.</p>
        <img src={characterImage} className='cpFig' alt='Character' data-aos="zoom-out" data-aos-duration="800" data-aos-delay="200" />
      </div>
      <div className="customStore-section" id="customStore-section4">
        <p className="aboutGameText4" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">Media</p>
        <div className="IMGcolumn" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <img src={pic1} className="pic1" alt="Pic 1" />
        </div>
        <div className="IMGcolumn" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <img src={pic2} className="pic2" alt="Pic 2" />
          <img src={pic3} className="pic3" alt="Pic 3" />
        </div>
        <div className="IMGcolumn" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <img src={pic4} className="pic4" alt="Pic 4" />
          <img src={pic5} className="pic5" alt="Pic 5" />
        </div>
      </div>
      <div className="customStore-section" id="customStore-section3">
        <p className="aboutGameText1" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
          Requirements
        </p>
        <div className='redbg1'></div>
        <div className='cards-container'>
          <div className='columnCustom' data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
            <div className='cardCustomS'>
              Hardware
            </div>
            <div className='cardCustomS'>
              Software
            </div>
            <div className='cardCustomS'>
              Accounts
            </div>
          </div>
          <div className='columnCustom' data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
            <div className='cardCustomS'>
              Pre Requisite
            </div>
            <div className='cardCustomS'>
              Network
            </div>
            <div className='cardCustomS'>
              Skills
            </div>
          </div>
        </div>
        <img src={characterImage1} className='cpFig1' alt='Character' data-aos="zoom-out" data-aos-duration="800" data-aos-delay="200" />
      </div>
      <div className="customStore-section" id="customStore-sectionre">
        <h1 className='sectionre-title' data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">Play Hard Get Rewards</h1>
        <p className='expansiontextre' data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">Official Tournaments Hosted By US and By CDPROJEKTRED only for the best edge runners in all of night city, play as V and Dante in the ultimate Arena and WIn cool reewards.</p>
        <img src={pic7} className='cpFigsectionre' alt='Character' data-aos="zoom-out" data-aos-duration="800" data-aos-delay="200" />
        <img src={pic8} className='cpFigsectionre2' alt='Character' data-aos="zoom-out" data-aos-duration="800" data-aos-delay="200" />
        <img src={pic9} className='cpFigsectionre3' alt='Character' data-aos="zoom-out" data-aos-duration="800" data-aos-delay="200" />
      </div>
      <div className="customStore-section" id="customStore-section10">
        <div className="section10-container">
          <img src={pic10} alt="Large Image" className="section10-image" data-aos="zoom-out" data-aos-duration="800" data-aos-delay="200" />
          <p className="section10-text1" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">Get Into Night City Now!</p>
          <p className='wiwi2' data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">Play</p>
          <div className='IGI' data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <div id="clip">
              <div id="leftTop" className="corner"></div>
              <div id="rightBottom" className="corner"></div>
              <div id="rightTop" className="corner"></div>
              <div id="leftBottom" className="corner"></div>
            </div>
            <span id="rightArrow" className="aarrow"></span>
            <span id="leftArrow" className="aarrow"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomStorePage;
