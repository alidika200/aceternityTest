import React, { useState } from 'react';
import './gamePageLibrary.css';
import profilePic from './assets/shitpost.jpg';
import Header from './Layout';
import DropdownMenu from './dropDownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';


const GamePageLibrary = ({backgroundImage, gameName,studioName,Description,datePlayed,totalHours,numberOfTournaments,tournamentImage,tournamentDesc}) => {

 

  return(
  <>
  <Header playerName ="Ali"
   backgroundImage = {profilePic}  /> 

 <div className='mainCard' >
    <div className="gameCard" style={{ backgroundImage: `url(${backgroundImage})` }} >
      <div className="gameOptions" >
        <div className="name-studio">
          <p className="gameName">{gameName}</p>
          <p className="studioName">{studioName}</p>
        </div>
        <div className="playButton">
          <button className="play">Play</button>
          <button className="more">More</button>
          <DropdownMenu></DropdownMenu>

        </div>
      </div>
    </div>
    
    <div className="disc-info">
      <div className="disc">
        <p className="description">Description</p>
        <div className="disc-card">
          <p>
           {Description}
          </p>
        </div>
      </div>
      <div className="info">
  <p className="information">Info</p>
  <div className="info-card">
    <ul>
      <li>Last Played: {datePlayed}</li>
      <li>Total Hours: {totalHours}</li>
      <li>Tournaments: {numberOfTournaments}</li>
    </ul>
  </div>
</div>

    </div>
    <div className="tournament">
      <div className="tours">
        <div className="image" style={{ backgroundImage: `url(${tournamentImage})` }}></div>
          <p className="tours-disc">
            {tournamentDesc}
          </p>
          </div>
          <button className="enroll">Enroll</button>
      </div>

      <div className="Review">
      <label htmlFor="description">Review</label>
      <div className="rev">
      <form>
      <textarea className='rev-box' id="description" name="description"></textarea>
      </form>
        <div className="submit">
          <div className='rate'>
          <button className="up"><FontAwesomeIcon icon="fa-solid fa-thumbs-down" /></button>
          <button className="down"> <FontAwesomeIcon icon="fa-solid fa-thumbs-down" /> </button>
          </div>
          <button className="post">Post</button>
        </div>
        </div>
      </div>
   </div>
   </>

  );

};

export default GamePageLibrary;