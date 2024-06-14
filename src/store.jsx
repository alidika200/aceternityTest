import React from 'react';
import Card from './card';
import './store.css'
import witcher3image from './assets/witcher3.jpg';
import helldiver from './assets/helldivers.jpg';
import division from './assets/download.jpg'
import profilePic from './assets/shitpost.jpg'
import Header from './Layout';
import CarouselComponent from './CarouselComponent';
import SideNav from './dropDownNavBar';


const Store = () => {
  
  return (
   <> 
<div className='storeWrapper'>
    <Header playerName ="Ali"
   backgroundImage = {profilePic}/> 

<SideNav></SideNav>
<div className='gg1'>

<CarouselComponent game1="The Witcher 3 Wild Hunt"game2="Tom Clancy's the Division 2" game3="Hell Divers"  phrase2="" phrase3="" image1={witcher3image} image2={division} image3={helldiver} />
</div>

      <p className='card-cat' >Online Only Games</p>

     <div className="card-row">
      {/* <Card 
        gameName="The Witcher 3 Wild Hunt" studioName="Cd Prject red"
        categories={['Action', 'Fantasy']} 
        backgroundImage={witcher3image} price="60" Description="Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Project "
        releaseDate="5/6/2024" category="Action" steam="80$" epic="65$" gog="75$" cpu="Intel Core i5 7750k"
        gpu="Nvidia RTX 4090" ram="32" review="Good" userImage={profilePic} userReview="it is a very good game"
         image1={division} image2={witcher3image} image3={helldiver} trailer="https://youtu.be/QdBZY2fkU-0?si=wbDYYfqhNzGf8-ta" 
      /> */}

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
    backgroundImage={witcher3image} price="60"
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
  </div>
    </>
 );
  
};

export default Store;


