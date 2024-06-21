import React, { useEffect, useRef } from 'react';
import './LibraryCarousel.css';
import witcher3image from './assets/witcher3.jpg';
import witcher3image1 from './assets/witcher3image1.jpg';
import witcher3image2 from './assets/witcher3image2.jpg';
import witcher3image3 from './assets/witcher3image3.jpg';
import hogwarts from './assets/hogwarts.jpg';
import division1 from './assets/division1.jpg';
import division2 from './assets/division2.jpg';
import division3 from './assets/division3.webp';
import wall1 from './assets/wall1.jpg';
import wall3 from './assets/wall3.jpg';
import helldiver from './assets/helldivers.jpg';
import logo25 from './assets/witcherlogo.jpg';
import {
    MenuOutlined
  } from '@ant-design/icons';
import Header from './Layout';
import SideNav from './dropDownNavBar';
import profilePic from './assets/shitpost.jpg'
import { Margin } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Carousel = () => {
    const nextRef = useRef(null);
    const prevRef = useRef(null);
    const carouselRef = useRef(null);
    const sliderRef = useRef(null);
    const thumbnailBorderRef = useRef(null);
    const timeRef = useRef(null);
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    useEffect(() => {
        const nextDom = nextRef.current;
        const prevDom = prevRef.current;
        const carouselDom = carouselRef.current;
        const sliderDom = sliderRef.current;
        const thumbnailBorderDom = thumbnailBorderRef.current;

        let runTimeOut;
        let runNextAuto;

        const showSlider = (type) => {
            const sliderItemsDom = sliderDom.querySelectorAll('.itemCarouselLibrary');
            const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.itemCarouselLibrary');

            if (type === 'next') {
                sliderDom.appendChild(sliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                carouselDom.classList.add('next');
            } else {
                sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselDom.classList.add('prev');
            }

            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselDom.classList.remove('next');
                carouselDom.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextDom.click();
            }, timeAutoNext);
        };

        nextDom.onclick = () => showSlider('next');
        prevDom.onclick = () => showSlider('prev');

        runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);

        return () => {
            clearTimeout(runTimeOut);
            clearTimeout(runNextAuto);
        };
    }, []);

    return (

<>

      
        <div className="carouselLibrary" ref={carouselRef}>
        <Header playerName ="Ali"
      backgroundImage = {profilePic}/> 
   
   <SideNav></SideNav>
            <div className="list200" ref={sliderRef}>
                <div className="itemCarouselLibrary">
                    <img src={division3} alt="The Division" />
                    <div className="contentCarouselLibrary">
                        <div className="author">Ubisoft, Massive</div>
                        <div className="title">Tom Clancy's</div>
                        <div className="topic">The Division</div>
                        <div className="buttons">
                            <button>Play</button>
                            <button>More</button>
                        </div>
                    </div>
                </div>
                <div className="itemCarouselLibrary">
                    <img src={witcher3image} alt="The Witcher 3" />
                    <div className="contentCarouselLibrary">
                        <div className="author">Cd Project Red</div>
                        <div className="title">The Witcher 3</div>
                        <div className="topic">Wild Hunt</div>
                        <div className="buttons">
                            <button>Play</button>
                            <button>More</button>
                        </div>
                    </div>
                </div>
                <div className="itemCarouselLibrary">
                    <img src={hogwarts} alt="CyberPunk 2077" />
                    <div className="contentCarouselLibrary">
                        <div className="author">Warner Bros</div>
                        <div className="title">Hogwarts</div>
                        <div className="topic">Legacy</div>
                        <div className="buttons">
                            <button>Play</button>
                            <button>More</button>
                        </div>
                    </div>
                </div>
                <div className="itemCarouselLibrary">
                    <img src={helldiver} alt="CyberPunk 2077" />
                    <div className="contentCarouselLibrary">
                        <div className="author">Warner Bros</div>
                        <div className="title">Hogwarts</div>
                        <div className="topic">Legacy</div>
                        <div className="buttons">
                            <button>Play</button>
                            <button>More</button>
                        </div>
                    </div>
                </div>
              
           
                
                
                
            </div>
            <div className="thumbnail" ref={thumbnailBorderRef}>
                <div className="itemCarouselLibrary">
                    <img src={division3} alt="The Division" />
                </div>
                <div className="itemCarouselLibrary">
                    <img src={witcher3image} alt="The Witcher 3" />
                </div>
                <div className="itemCarouselLibrary">
                    <img src={hogwarts} alt="CyberPunk 2077" />
                </div>
                <div className="itemCarouselLibrary">
                    <img src={wall1} alt="Take A Break" />
                </div>
                <div className="itemCarouselLibrary">
                    <img src={helldiver} alt="Take A Break" />
                </div>
                <div className="itemCarouselLibrary">
                    <img src={wall3} alt="Take A Break" />
                </div>
            </div>
            <div className="arrows">
                <button id="prev" ref={prevRef}>{'<'}</button>
                <button id="next" ref={nextRef}>{'>'}</button>
                <Link to="/library2">
                <button id="next"> <MenuOutlined /></button>
                </Link>
            </div>
            <div className="time" ref={timeRef}></div>
        </div>
        </>
    );
};

export default Carousel;
