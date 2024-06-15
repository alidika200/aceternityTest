import React, { useState } from 'react';
import './gamePageLibrary.css';
import profilePic from './assets/shitpost.jpg';
import Header from './Layout';
import DropdownMenu from './dropDownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import SideNav from './dropDownNavBar';
import { useLocation } from 'react-router-dom';

const GamePageLibrary = () => {


  const location = useLocation();
  const {
    backgroundImage, 
    gameName, 
    studioName, 
    Description,
     datePlayed, 
    totalHours, 
    numberOfTournaments, 
    tournamentImage,
     tournamentDesc
  } = location.state || {};
  const [openMenu, setOpenMenu] = useState(false);
  const [reviews, setReviews] = useState([]); // Initialize reviews state

 
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const newReview = document.getElementById("description").value; // Get the review text
    setReviews([...reviews, newReview]); // Update the reviews state
    document.getElementById("description").value = ''; // Clear the textarea
  };
  return (
    <>
      <Header playerName="Ali" backgroundImage={profilePic} />

      <SideNav></SideNav>

      <div className='mainCard'>
        <div className="gameCard" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="gameOptions">
            <div className="name-studio">
              <p className="gameName">{gameName}</p>
              <p className="studioName">{studioName}</p>
            </div>
            <div className="playButton">
              <button className="play">Play</button>
              <button className="more" onClick={() => setOpenMenu((prev) => !prev)}>More</button>
            </div>
          </div>
        </div>
        {openMenu && <DropdownMenu />}

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
                <button className="up"><FontAwesomeIcon icon={faThumbsUp} /></button>
                <button className="down"> <FontAwesomeIcon icon={faThumbsDown} /> </button>
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