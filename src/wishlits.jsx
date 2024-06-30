import React from 'react';
import './wishlist.css';
import profilePic from './assets/debovxe-d9b6da12-ac0b-4e07-b12b-8021c24abfc7.jpg';
import witcher3image from './assets/witcher3.jpg';
import helldiver from './assets/helldivers.jpg';
import SideNav from './dropDownNavBar';
import Header from './Layout';

const Wishlist = () => {
  return (
    <>
    <SideNav />
      <div className="wishlistWrapper">
      <Header playerName="Ali" backgroundImage={profilePic} />
      
        <div className="wishlistCard">
          <div className="wishlistItem">
            <img src={profilePic} alt="game pic" className="gameBan" />
            <p className="gameNameWishlist">Game Name</p>
            <button className="wishAdd">$20</button>
          </div>
          <div className="wishlistItem">
            <img src={witcher3image} alt="game pic" className="gameBan" />
            <p className="gameNameWishlist">Game Name</p>
            <button className="wishAdd">$20</button>
          </div>
          <div className="wishlistItem">
            <img src={helldiver} alt="game pic" className="gameBan" />
            <p className="gameNameWishlist">Game Name</p>
            <button className="wishAdd">$20</button>
          </div>
          {/* Repeat wishlistItem for each game */}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
