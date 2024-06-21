import React, { useState } from 'react';
import './tournamentList.css';
import profilePic from './assets/shitpost.jpg';
import pro1 from './assets/unnamed.webp';
import pro2 from './assets/debovxe-d9b6da12-ac0b-4e07-b12b-8021c24abfc7.jpg';
import pro3 from './assets/pfp333.jpg';
import Header from './Layout';
import SideNav from './dropDownNavBar';
import { useLocation } from 'react-router-dom';
const Tournament = () => {
  const location = useLocation();
  const {
    tournamentImage,
    tournamentName, tournamentDesc, maxNumber,prize1,prize2,prize3
  } = location.state || {};
  
  const [number, setNumber] = useState(0);

  const handleJoin = () => {
    if (number < maxNumber) {
      setNumber(number + 1);
    }
  };

  return (
    <>
    <div className='outsideTournament'>
      <Header playerName="Ali" backgroundImage={profilePic} />
      <SideNav />
      <div className='tournamentCard'>
        <div className='ttwrap'>
        <p className="tournamentName">{tournamentName} Tournament</p>
        <div className="tournamentpfp" style={{ backgroundImage: `url(${tournamentImage})` }}></div>      
        </div> 
        <div className='tournamentDesc'>{tournamentDesc}</div>
        <div className='t-ranks'>
          <div className='prizes'>Ranks</div>
          <div className='n1'>#1</div>
          <div className='prize'>{prize1} Free Gwent Legendary set</div>
          <div className='n1'>#2</div>
          <div className='prize'>{prize2}Free Copy of The Witcher 3 GOTY</div>
          <div className='n1'>#3 </div>
          <div className='prize'>{prize3}Free Premuim for 1 month</div>
        </div>
        <div className='part-iif'>
        <div className='contestentCards'>
          <div className='contestNumber'>Participants: {number}/{maxNumber}20</div>
          <div className='proName'>
          <div className="contestentProfile" style={{ backgroundImage: `url(${pro1})` }}></div>
          <div className='contestentName'>JayJay</div>
          </div>
          <div className='proName'>
          <div className="contestentProfile" style={{ backgroundImage: `url(${pro2})` }}></div>
          <div className='contestentName'>Ali</div>
          </div>
          <div className='proName'>
          <div className="contestentProfile" style={{ backgroundImage: `url(${pro3})` }}></div>
          <div className='contestentName'>Micky</div>
          </div>
        </div>
        <div className='t-inf'>
          <lu>
          <li className='dateStart'>20/8/2025</li>
          <li className="t-game" >GWENT</li>
          <li className='region'>Lebanon</li>
          </lu>
        </div>
        </div>
        <button
          className='JoinButton'
          onClick={handleJoin}
          style={{
            backgroundColor: number >= maxNumber ? 'red' : '#4CAF50'
          }}>
          {number >= maxNumber ? 'Full' : 'Join'}
        </button>
        <button className='SpectateButton'>Spectate</button>
      </div>
      </div>    
      </>
  );
};
export default Tournament;
