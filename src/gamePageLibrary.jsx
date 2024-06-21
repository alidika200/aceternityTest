import React, { useState } from 'react';
import './gamePageLibrary.css';
import profilePic from './assets/shitpost.jpg';
import Header from './Layout';
import DropdownMenu from './dropDownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import SideNav from './dropDownNavBar';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const GamePageLibrary = () => {
  const location = useLocation();
  const {
    backgroundImage, 
    gameName, 
    studioName, 
    Description,
    datePlayed, 
    totalHours, tournamentImage, tournamentName,
     tournamentDesc
  } = location.state || {};
  const stateData = {
    backgroundImage, 
    gameName, 
    studioName, 
    Description,
    datePlayed, 
    totalHours, tournamentImage,tournamentName,
    tournamentDesc
  };


  const [openMenu, setOpenMenu] = useState(false);
  const [reviews, setReviews] = useState([]); 

 
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
          <div className="cardwork">
      <div className="img-section">
        <svg xmlns="http://www.w3.org/2000/svg" height="77" width="76">
          <path
            fillRule="nonzero"
            fill="#3F9CBB"
            d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z"
          ></path>
        </svg>
      </div>
      <div className="card-descwork">
        <div className="card-headerwork">
          <div className="card-titlework">Play</div>
          <div className="card-menuwork">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div className="card-time">{totalHours} Hours</div>
        <p className="recent">{datePlayed} - {totalHours}</p>
      </div>
    </div>
          {/* <div className="info">
            <p className="information">Info</p>
            <div className="info-card">
              <ul>
                <li>Last Played: {datePlayed}</li>
                <li>Total Hours: {totalHours}</li>
                <li>Tournaments: {numberOfTournaments}</li>
              </ul>
            </div>
          </div> */}
        </div>

      

        <div className="tournament">
          <div className="tours">
            <div className="image" style={{ backgroundImage: `url(${tournamentImage})` }}></div>
            <p className="tours-disc">
              {tournamentDesc}
            </p>
            <Link to="/tournament" state={stateData}>
          <button className="enroll">Join</button>
      </Link>
          </div>
          
      
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