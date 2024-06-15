import React from 'react';
import './friendCard.css';
import profilePic from './assets/shitpost.jpg';
import userImage from './assets/shitpost.jpg';
import { Link } from 'react-router-dom';

const UserCard = ({id,userImage,userName}) => {
    const stateData = {id};
  


  return (
    <>
      <div className='smallCard'>
        <div className="imageFriend" style={{ backgroundImage: `url(${userImage})` }}></div>
        <Link to="/profile" state={stateData}>
        <p className='friendName'>{userName}</p>
        </Link>
      </div>
    </>
  );
};

export default UserCard;
