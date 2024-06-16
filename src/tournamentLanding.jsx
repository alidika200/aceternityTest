import React, { useState } from 'react';
import './tournamentLanding.css';
import profilePic from './assets/shitpost.jpg';
import Header from './Layout';
import SideNav from './dropDownNavBar';
import { useLocation } from 'react-router-dom';
const Tournament = () => {
  const location = useLocation();
  const {
    tournamentImage,
    tournamentName, tournamentDesc,  maxNumber
  } = location.state || {};
  
  


  // State to manage the number of players
  const [number, setNumber] = useState(0);

  // Handler for joining the tournament
  const handleJoin = () => {
    if (number < maxNumber) {
      setNumber(number + 1);
    }
  };

  return (
    <>
      <Header playerName="Ali" backgroundImage={profilePic} />
      <SideNav />
      <div className='tournamentCard'>
        <div className="tournamentpfp" style={{ backgroundImage: `url(${tournamentImage})` }}></div>
        <p className="tournamentName">{tournamentName}</p>
        <div className='tournamentDesc'>{tournamentDesc}</div>
        <div className='contestentCards'>
          <div className='contestNumber'>{number}/{maxNumber}</div>
          <div className="contestentProfile" style={{ backgroundImage: `url(${profilePic})` }}></div>
          <div className='contestentName'>Ali</div>
        </div>
        <button
          className='JoinButton'
          onClick={handleJoin}
          style={{
            backgroundColor: number >= maxNumber ? 'red' : '#4CAF50'
          }}
        >
          {number >= maxNumber ? 'Full' : 'Join'}
        </button>
        <button className='SpectateButton'>Spectate</button>
      </div>
    </>
  );
};

export default Tournament;
