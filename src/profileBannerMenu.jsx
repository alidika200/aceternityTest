import React, { useState } from 'react';
import './profileBannerMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faMessage } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import profilePic from './assets/shitpost.jpg';


const Avatar20 = ({ backgroundImage }) => {
  return (
   
        <a
          href="#"
          className="profileBanner"
          style={{ marginLeft: '15px', backgroundImage: `url(${backgroundImage})` }}
        ></a>
      
    
  );
};


export default Avatar20;
