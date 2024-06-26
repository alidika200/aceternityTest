import React, { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import tor from './assets/nigro.webp';
import './stickyScrollSec.css';

gsap.registerPlugin(ScrollTrigger);

const F3 = () => {
  const wrapperRef = useRef(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    const details = gsap.utils.toArray(wrapper.querySelectorAll(".desktopContentSection:not(:first-child)"));
    const photos = gsap.utils.toArray(wrapper.querySelectorAll(".desktopPhoto:not(:first-child)"));
    gsap.set(photos, { yPercent: 101 });
    const allPhotos = gsap.utils.toArray(wrapper.querySelectorAll(".desktopPhoto"));

    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      console.log("desktop");

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right"
      });

      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1");
        let animation = gsap.timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false
        });
      });

     
    });

  }, []);

  return (
    <div ref={wrapperRef} className="stickWrap">

      <div className="gallery">
        <div className="left">
          <div className="desktopContent">
            <div className="desktopContentSection">
              <h1>Experience Gaming Like Never Before</h1>
              
            </div>
            <div className="desktopContentSection">
              <h1>Premier Tournaments for Championss</h1>
              {/* <p>Green is a color that is often associated with nature, growth, and harmony. It is a calming and relaxing color that can evoke feelings of balance, stability, and freshness. In color psychology, green is said to represent balance and stability, making it a popular choice for branding and marketing in the health and wellness industry.</p> */}
            </div>
            <div className="desktopContentSection">
              <h1>Transform Your Ideas into Games</h1>
              {/* <p>Pink is a color that is often associated with femininity, romance, and sweetness. It is a softer and more delicate shade of red that can evoke feelings of warmth, love, and nurturing. In the world of branding and marketing, pink is often used to target a female audience or to promote products that are associated with beauty, love, or romance.</p>
              <p>Pink is also used in the food industry, as it is associated with sweetness and desserts. Pink is often used in breast cancer awareness campaigns, as it has become the signature color of the movement.</p>
              <p>Pink is also commonly used in baby showers and weddings, as it symbolizes love, innocence, and new beginnings.</p> */}
            </div>
            <div className="desktopContentSection">
              <h1>One Untied Community</h1>
              {/* <p>Blue is a color that is often associated with calmness, trust, and reliability. It is a peaceful and serene color that can evoke feelings of stability, security, and professionalism. In color psychology, blue is said to represent loyalty and trust, making it a popular choice for branding and marketing in the finance and technology industries.</p> */}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="desktopPhotos">
            <div className="desktopPhoto red"></div>
            <div className="desktopPhoto green"></div>
            <div className="desktopPhoto pink"></div>
            <div className="desktopPhoto blue"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default F3;
