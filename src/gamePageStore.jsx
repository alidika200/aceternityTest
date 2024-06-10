import React, { useState } from 'react';
import './gamePageStore.css';
import profilePic from './assets/shitpost.jpg';
import Header from './Layout';
import DropdownMenu from './dropDownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';

const GamePageStore = ({ backgroundImage, gameName, studioName, price, Description, releaseDate, category,  
  steam, epic, gog, cpu, gpu, ram, review, userImage, userReview, image1, image2, image3, trailer }) => {
  // const [openMenu, setOpenMenu] = useState(false);
  const images = [image1, image2, image3];

  return (
    <>
      <Header playerName="Ali" backgroundImage={profilePic} />

      <div className='mainCardstore'>
        <div className="gameCardstore" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="name-studioStore">
            <p className="gameNameStore">{gameName}</p>
            <p className="studioName">{studioName}</p>
          </div>
          <div className="playButtonStore">
            <button className="playStore">{price}</button>
          </div>
          <div className="phrase">
            <p>Steel For Humans, Silver for  <span className="highlight1">Monsters</span></p>
          </div>
        </div>
        {/* {openMenu && <DropdownMenu />} */}

        <div className='gallery'>
          {images.map((image, index) => (
            <div key={index} className='card' style={{ backgroundImage: `url(${image})` }}></div>
          ))}
        </div>

        <div className='Trailer'>
          <ReactPlayer url={trailer} controls={true} width='100%' height='100%' />
        </div>
        
        <div className='row'>

    <div className='coulmn1'>
     <div className="discriptionCardStore">
      <div className="discStore">
        <p className="descriptionStore">Description</p>
       <div className="disc-card">
        <p>{Description}</p>
      </div>
    </div>
  </div>

  <div className="info">
      <p className="information">Info</p>
      <div className="info-card">
        <ul>
          <li>Category: {category}</li>
          <li>User Review: {review}</li>
          <li>Release Date: {releaseDate}</li>
        </ul>
      </div>
    </div>

    </div>

  <div className="card-column">
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
      <div className="price-card">
        <ul>
          <li>Steam: {steam}</li>
          <li>Epic: {epic}</li>
          <li>GOG: {gog}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
        <div className="Review">
          <div className="tournament">
            <div className="tours">
              <div className="image" style={{ backgroundImage: `url(${userImage})` }}></div>
              <p className="tours-disc">{userReview}</p>
            </div>
          </div>
          <div className="submit">
            <div className='rate'>
              <button className="up"><FontAwesomeIcon icon={faThumbsUp} /></button>
              <button className="down"> <FontAwesomeIcon icon={faThumbsDown} /> </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePageStore;
