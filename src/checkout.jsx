import React from 'react';
import './checkout.css';
import profilePic from './assets/shitpost.jpg';
import Header from './Layout';
import division from './assets/division.jpg';
import logo from './assets/witcherlogo.jpg';
import SideNav from './dropDownNavBar';
import Post from './postComponent';
import { Link } from 'react-router-dom';
import witcher3image from './assets/witcher3.jpg';
import witcher3image1 from './assets/witcher3image1.jpg';
import witcher3image2 from './assets/witcher3image2.jpg';
import witcher3image3 from './assets/witcher3image3.jpg';

const Checkout = () => {
  return (
    <>
      <Header playerName="Ali" backgroundImage={profilePic} />
      <SideNav />
      <div className="checkout-container">
        <div className="checkout-card">
          <p className="total">Total: ....</p>
          <input className="promoCode" type="text" placeholder="Promo Code" />
          <button className="purchase-button">Purchase</button>
        </div>
      </div>
    </>
  );
};

export default Checkout;