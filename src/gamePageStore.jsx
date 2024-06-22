import React from 'react';
import './gamePageStore.css';
import profilePic from './assets/shitpost.jpg';
import pfp from './assets/pfp.webp';
import Header from './Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';
import SideNav from './dropDownNavBar';
import { useLocation } from 'react-router-dom';
import API from './apiTest';
import { TracingBeam } from './components/ui/tracing-beam';

const GamePageStore = () => {
  const location = useLocation();
  const {
    gameName,
    studioName,
    backgroundImage,
    price,
    Description,
    releaseDate,
    category,
    cpu,
    gpu,
    ram,
    review,
    userImage,
    userReview,
    image1,
    image2,
    image3,
    trailer
  } = location.state || {};

  const images = [image1, image2, image3];

  return (
    <>
      <Header playerName="Ali" backgroundImage={profilePic} />
      <SideNav></SideNav>

      <div className='mainCardstore'>
        <div className="gameCardstore" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="name-studioStore">
            <p className="gameNameStore">{gameName}</p>
            <p className="studioNameStore">{studioName}</p> 
          </div>
          <div className="playButtonStore">
            <button className="playStore">{price}</button>
          </div>
          <div className="phrase">
            <p>When Society Falls We <span className="highlight1">Rise</span></p>
          </div>
        </div>

        <div className='gallery'>
          {images.map((image, index) => (
            <div key={index} className='cardStore' style={{ backgroundImage: `url(${image})` }}></div>
          ))}
        </div>

        <div className='Trailer'>
          <ReactPlayer url={trailer} controls={true} width='100%' height='100%' />
        </div>
        
        <div className='rowStore'>
          <div className='coulmn1'>
            <div className="discriptionCardStore">
              <div className="discStore">
                <p className="descriptionStore">Description</p>
                <div className="disc-cardStore">
                  <p>{Description}</p>
                </div>
              </div>
            </div>

            <div className="infoStore">
              <p className="informationStore">Info</p>
              <div className="info-cardStore">
                <ul>
                  <li>Category: {category}</li>
                  <li>User Review: {review}</li>
                  <li>Release Date: {releaseDate}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card-columnStore">
            <div className="system-req">
              <p className="Requriments">Requirements</p>
              <div className="req-card">
                <ul>
                  <li>CPU: {cpu}</li>
                  <li>GPU: {gpu}</li>
                  <li>Ram: {ram} GB</li>
                </ul>
              </div>
            </div>

            <div className="price">
              <p className="information">Prices</p>
              <API gameName={gameName} />
            </div>
          </div>
        </div>

        <div className="ReviewStore">
          {[userReview].map((review, index) => (
            <div key={index} className="tournamentStore">
              <div className="toursStore">
                <div className="imageStore" style={{ backgroundImage: `url(${userImage})` }}></div>
                <p className="tours-discStore">{review}</p>
              </div>
              <div className="submitStore">
                <div className='rateStore'>
                  <button className="upStore"><FontAwesomeIcon icon={faThumbsUp} /></button>
                  <button className="downStore"> <FontAwesomeIcon icon={faThumbsDown} /> </button>
                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </>
  );
};

export default GamePageStore;
