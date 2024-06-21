import React from 'react';
import Card from './card';
import './store.css'
import witcher3image from './assets/witcher3.jpg';
import helldiver from './assets/helldivers.jpg';
import division from './assets/download.jpg';
import profilePic from './assets/shitpost.jpg';
import pfp from './assets/pfp.webp';
import Header from './Layout';
import CarouselComponent from './CarouselComponent';
import SideNav from './dropDownNavBar';
import witcher3image1 from './assets/witcher3image1.jpg';
import witcher3image2 from './assets/witcher3image2.jpg';
import witcher3image3 from './assets/witcher3image3.jpg';
import division1 from './assets/division1.jpg';
import division2 from './assets/division2.jpg';
import division3 from './assets/division3.webp';

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
      <Card 
         gameName= "Mortal Kombat XL"
         studioName= "CD Projekt Red"
         categories={['Adventure', 'RPG']} 
         backgroundImage= {witcher3image}
         price= "60$"
         Description= "Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projekt"
         releaseDate= "5/6/2024"
         category= "Action"
         cpu= "Intel Core i5 7750k"
         gpu= "Nvidia RTX 4090"
         ram= "32"
         review= "Good"
         userImage = {pfp}
         userReview= "I loved the Game"
         image1= {witcher3image1}
         image2= {witcher3image2}
         image3= {witcher3image3}
         trailer= "https://youtu.be/c0i88t0Kacs?si=wVnS0T0LXI2slZIi"
      />

<Card 
         gameName= "The division 2"
         studioName= "Ubisoft, Massive"
         categories={['Adventure', 'RPG']} 
         backgroundImage= {division}
         price= "60$"
         Description= "Division 2 is an online only game acts as the sequel for the acclaimed divison 1 developed By ubisoft massive"
         releaseDate= "5/6/2024"
         humbleBundle="20"
         cpu= "Intel Core i7 6660k"
         gpu= "Nvidia RTX 2070"
         ram= "32"
         review= "Good"
         userImage = {profilePic}
         userReview= "The Game is fun"
         image1= {division}
         image2= {witcher3image}
         image3= {helldiver}
         trailer= "https://youtu.be/sli7AbX2bEk?si=E9rPS7jTNFPkSyXY"
      />
      <Card 
         gameName= "Mortal Kombat XL"
         studioName= "CD Projekt Red"
         categories={['Adventure', 'RPG']} 
         backgroundImage= {witcher3image}
         price= "60$"
         Description= "Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projekt awidhgwayiduwaiudhwaiuhduiwahdiuwahduiwahduiwahd"
         releaseDate= "5/6/2024"
         category= "Action"
         cpu= "Intel Core i5 7750k"
         gpu= "Nvidia RTX 4090"
         ram= "32"
         review= "Good"
         userImage = {profilePic}
         userReview= "lmao so gay"
         image1= {witcher3image1}
         image2= {witcher3image2}
         image3= {witcher3image3}
         trailer= "https://youtu.be/c0i88t0Kacs?si=wVnS0T0LXI2slZIi"
      />

<Card 
         gameName= "Mortal Kombat XL"
         studioName= "CD Projekt Red"
         categories={['Adventure', 'RPG']} 
         backgroundImage= {witcher3image}
         price= "60$"
         Description= "Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projekt awidhgwayiduwaiudhwaiuhduiwahdiuwahduiwahduiwahd"
         releaseDate= "5/6/2024"
         category= "Action"
         cpu= "Intel Core i5 7750k"
         gpu= "Nvidia RTX 4090"
         ram= "32"
         review= "Good"
         userImage = {profilePic}
         userReview= "lmao so gay"
         image1= {witcher3image1}
         image2= {witcher3image2}
         image3= {witcher3image3}
         trailer= "https://youtu.be/c0i88t0Kacs?si=wVnS0T0LXI2slZIi"
      />

<Card 
         gameName= "Mortal Kombat XL"
         studioName= "CD Projekt Red"
         categories={['Adventure', 'RPG']} 
         backgroundImage= {witcher3image}
         price= "60$"
         Description= "Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projekt awidhgwayiduwaiudhwaiuhduiwahdiuwahduiwahduiwahd"
         releaseDate= "5/6/2024"
         category= "Action"
         cpu= "Intel Core i5 7750k"
         gpu= "Nvidia RTX 4090"
         ram= "32"
         review= "Good"
         userImage = {profilePic}
         userReview= "lmao so gay"
         image1= {witcher3image1}
         image2= {witcher3image2}
         image3= {witcher3image3}
         trailer= "https://youtu.be/c0i88t0Kacs?si=wVnS0T0LXI2slZIi"
      />




{/* <Card 
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
      /> */}
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
      <Card 
         gameName= "The division 2"
         studioName= "Ubisoft, Massive"
         categories={['Adventure', 'RPG']} 
         backgroundImage= {division}
         price= "60$"
         Description= "Division 2 is an online only game acts as the sequel for the acclaimed divison 1 developed By ubisoft massive"
         releaseDate= "5/6/2024"
         humbleBundle="20"
         cpu= "Intel Core i7 6660k"
         gpu= "Nvidia RTX 2070"
         ram= "32"
         review= "Good"
         userImage = {profilePic}
         userReview= "kkkk"
         image1= {division}
         image2= {witcher3image}
         image3= {helldiver}
         trailer= "https://youtu.be/QdBZY2fkU-0?si=wbDYYfqhNzGf8-ta"
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


