import React from 'react';
import './Layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faMessage } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import { CssTransition } from '@mui/base/Transitions';
import { PopupContext } from '@mui/base/Unstable_Popup'

const Header = ({playerName,  backgroundImage }) => {


  return (
    <header className="header-design">
      <h3 className="Logo">GAMEPEDIA </h3>
      <h3 className="greetings">Good Day {playerName}</h3>
      <div className="options">
    <div className="SearchBar">   <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{ color: '#ffffff' }} /> </div>

        <a href='#' className="notification" style={{ marginLeft: '15px' }}>
          <FontAwesomeIcon icon={faBell} size="lg" style={{ color: '#ffffff' }} />
        </a>
        <a href='#' className="messages" style={{ marginLeft: '15px' }}>
          <FontAwesomeIcon icon={faMessage} size="lg" style={{ color: '#ffffff' }} />
        </a>
      </div>
      <a href='#' className="profile" style={{ marginLeft: '15px' , backgroundImage: `url(${backgroundImage})` }} ></a>
    </header>
  );
};

export default Header;
