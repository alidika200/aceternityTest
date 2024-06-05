import React from 'react';
import Card from './card';
import './store.css'
import witcher3image from './assets/witcher3.jpg';
import helldiver2 from './assets/helldivers.jpg';
import profilePic from './assets/shitpost.jpg'
import Header from './Layout';
import { BrowserRouter as Router } from 'react-router-dom';


const Store = () => {
  
  return (
   <> 
    <Header playerName ="Ali"
   backgroundImage = {profilePic}/> 
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
        backgroundImage={helldiver2}
      />
      <Card 
        gameName="Hell Divers 2" 
        categories={['Adventure', 'RPG']} 
        backgroundImage={helldiver2}
      />
      <Card 
        gameName="Hell Divers 2" 
        categories={['Adventure', 'RPG']} 
        backgroundImage={helldiver2}
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
        backgroundImage={helldiver2}
      />
      <Card 
        gameName="Hell Divers 2" 
        categories={['Adventure', 'RPG']} 
        backgroundImage={helldiver2}
      />
      <Card 
        gameName="Hell Divers 2" 
        categories={['Adventure', 'RPG']} 
        backgroundImage={helldiver2}
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
    backgroundImage={helldiver2}
  />
  <Card 
    gameName="Hell Divers 2" 
    categories={['Adventure', 'RPG']} 
    backgroundImage={helldiver2}
  />
  <Card 
    gameName="Hell Divers 2" 
    categories={['Adventure', 'RPG']} 
    backgroundImage={helldiver2}
  />
  </div> 
    </>
 );
  
};

export default Store;



