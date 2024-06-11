import React from 'react';
import Card from './card';
import './store.css'
import witcher3image from './assets/witcher3.jpg';
import helldiver from './assets/helldivers.jpg';
import division from './assets/download.jpg'
import profilePic from './assets/shitpost.jpg'
import Header from './Layout';
import CarouselComponent from './CarouselComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import SideNav from './dropDownNavBar';


const Store = () => {
  
  return (
   <> 
    <Header playerName ="Ali"
   backgroundImage = {profilePic}/> 

<SideNav></SideNav>

<div className='gg1'>

<CarouselComponent game1="The Witcher 3 Wild Hunt"game2="Tom Clancy's the Division 2" game3="Hell Divers"  phrase2="" phrase3="" image1={witcher3image} image2={division} image3={helldiver} />
</div>

      <p className='card-cat' >Online Only Games</p>

     <div className="card-row">
      <Card 
        gameName="The Witcher 3 Wild Hunt"
        categories={['Action', 'Fantasy']} 
        backgroundImage={witcher3image}
      />
      <Card 
        gameName="Hell Divers 2" 
        categories={['Adventure', 'RPG']} 
        backgroundImage={helldiver}
      />
      <Card 
        gameName="Hell Divers 2" 
        categories={['Adventure', 'RPG']} 
        backgroundImage={helldiver}
      />
      <Card 
        gameName="Hell Divers 2" 
        categories={['Adventure', 'RPG']} 
        backgroundImage={helldiver}
      />
    </div>

    <p className='card-cat' >Fantasy Games</p>

    <div className="card-row"> 
    <Card 
        gameName="The Witcher 3 Wild Hunt"
        categories={['Action', 'Fantasy']} 
        backgroundImage={witcher3image}
      />
      <Card 
        gameName="Hell Divers 2" 
        categories={['Adventure', 'RPG']} 
        backgroundImage={helldiver}
      />
      <Card 
        gameName="Hell Divers 2" 
        categories={['Adventure', 'RPG']} 
        backgroundImage={helldiver}
      />
      <Card 
        gameName="Hell Divers 2" 
        categories={['Adventure', 'RPG']} 
        backgroundImage={helldiver}
      />
      </div>

      <p className='card-cat' >Fantasy Games</p>

<div className="card-row"> 
<Card 
    gameName="The Witcher 3 Wild Hunt"
    categories={['Action', 'Fantasy']} 
    backgroundImage={witcher3image}
  />
  <Card 
    gameName="Hell Divers 2" 
    categories={['Adventure', 'RPG']} 
    backgroundImage={helldiver}
  />
  <Card 
    gameName="Hell Divers 2" 
    categories={['Adventure', 'RPG']} 
    backgroundImage={helldiver}
  />
  <Card 
    gameName="Hell Divers 2" 
    categories={['Adventure', 'RPG']} 
    backgroundImage={helldiver}
  />
  </div> 
    </>
 );
  
};

export default Store;



