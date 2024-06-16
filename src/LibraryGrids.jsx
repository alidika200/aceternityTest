import React from 'react';
import Card from './card';
import './LibraryGrids.css'
import witcher3image from './assets/witcher3.jpg';
import helldiver from './assets/helldivers.jpg';
import division from './assets/download.jpg';
import profilePic from './assets/shitpost.jpg';
import Header from './Layout';
import CarouselComponent from './CarouselComponent';
import SideNav from './dropDownNavBar';
import witcher3image1 from './assets/witcher3image1.jpg';
import witcher3image2 from './assets/witcher3image2.jpg';
import witcher3image3 from './assets/witcher3image3.jpg';
import division1 from './assets/division1.jpg';
import division2 from './assets/division2.jpg';
import division3 from './assets/division3.webp';
import Card2 from './card2';
import logo1 from './assets/logo1.png'

const LibraryGrid = () => {
  
  return (
   <> 
<div className='storeWrapper'>
<Header playerName ="Ali"
   backgroundImage = {profilePic}/> 

<SideNav></SideNav>

      <p className='card-cat2' >Your Games</p>

     <div className="card-row2">
      <Card2 
         backgroundImage= {witcher3image} 
         gameName= "The Witcher 3: wild hunt"
         studioName= "CD Projekt Red"
         Description= "Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projekt awidhgwayiduwaiudhwaiuhduiwahdiuwahduiwahduiwahd"
         datePlayed = "10/2/2024"
         totalHours = "120"
         tournamentImage = {logo1}
         tournamentName = "Masters Of Gwent"
         tournamentDesc = "The 4th annual Gwent Tournament"
         maxNumber="20"
      />

<Card2
         gameName= "The division 2"
         studioName= "Ubisoft, Massive"
         categories={['Adventure', 'RPG']} 
         backgroundImage= {division}
         price= "60$"
         Description= "Division 2 is an online only game acts as the sequel for the acclaimed divison 1 developed By ubisoft massive"
         datePlayed="10/3/2024"
         totalHours="150"
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
      <Card2
         gameName= "The division 2"
         studioName= "Ubisoft, Massive"
         categories={['Adventure', 'RPG']} 
         backgroundImage= {helldiver}
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
            <Card2
         gameName= "The division 2"
         studioName= "Ubisoft, Massive"
         categories={['Adventure', 'RPG']} 
         backgroundImage= {helldiver}
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

    {/* <p className='card-cat' >Fantasy Games</p>

    <div className="card-row"> 
   
  </div>  */}
  </div>
    </>
 );
  
};

export default LibraryGrid;


