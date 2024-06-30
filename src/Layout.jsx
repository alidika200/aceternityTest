import React, { useState } from 'react';
import './Layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faMessage, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import AccountMenu from './profDropdown';
import SearchBar from './search.jsx';
import ChatWidget from './ChatWidget'; 
import Badge from '@mui/material/Badge';

const Header = ({ playerName }) => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  return (
    <header className="header-design">
      <h3 className="Logo">GAMEPEDIA</h3>
      <h3 className="greetings">Good Day {playerName}</h3>

      <div className="options">
        <SearchBar />
        <Badge badgeContent={4} color="secondary">
          <a href="#" className="cart" style={{ marginLeft: '15px' }}>
            <FontAwesomeIcon icon={faCartShopping} size="lg" style={{ color: '#ffffff' }} />
          </a>
        </Badge>
        <a href="#" className="messages" style={{ marginLeft: '15px' }} onClick={() => setIsChatVisible(!isChatVisible)}>
          <FontAwesomeIcon icon={faMessage} size="lg" style={{ color: '#ffffff' }} />
        </a>
        {isChatVisible && <ChatWidget />}
      </div>
      <AccountMenu />
    </header>
  );
};

export default Header;
