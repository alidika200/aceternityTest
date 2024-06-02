import React, { useState } from 'react';

import './Layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faMessage } from '@fortawesome/free-solid-svg-icons';



const sideNavBar = () => {
  
   
    return (
      <div >
        <a href="#section">About</a>
        <a href="#section">Services</a>
        <a href="#section">Clients</a>
        <a href="#section">Contact</a>
        <button onClick={toggleSideNav}>Toggle</button>
      </div>
    );
};
export default sideNavBar;