import React, { useState } from 'react';
import './Layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faMessage } from '@fortawesome/free-solid-svg-icons';
import AccountMenu from './profDropdown';
import SearchBar from './search.jsx';
import ChatWidget from './ChatWidget'; // Import ChatWidget component

const Header = ({ playerName }) => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  return (
    <header className="header-design">
      <h3 className="Logo">GAMEPEDIA</h3>
      <h3 className="greetings">Good Day {playerName}</h3>

      <div className="options">
        <SearchBar />
        <a href="#" className="notification" style={{ marginLeft: '15px' }}>
          <FontAwesomeIcon icon={faBell} size="lg" style={{ color: '#ffffff' }} />
        </a>
        <a href="#" className="messages" style={{ marginLeft: '15px' }} onClick={() => setIsChatVisible(!isChatVisible)}>
          <FontAwesomeIcon icon={faMessage} size="lg" style={{ color: '#ffffff' }} />
        </a>
      </div>
      <AccountMenu />
      {isChatVisible && <ChatWidget />}
    </header>
  );
};

export default Header;
