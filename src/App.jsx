import React from 'react';
import profilePic from './assets/shitpost.jpg'
import Header from './Layout';
import Card from './card';
import Store from './store';
import witcher3image from './assets/witcher3.jpg';
import division from './assets/download.jpg'
import helldivers from './assets/helldivers.jpg';
import tournamentimage from './assets/logo1.png' ;
import GameForm from './addGameForn';
import CarouselComponent from './CarouselComponent';
import GamePageLibrary from './gamePageLibrary';
import GamePageStore from './gamePageStore';
import Post from './postComponent';
import { HdRounded } from '@mui/icons-material';
import SideNav from './dropDownNavBar';
import LibraryCarousel from './libraryCarousel';
function App() {
  return (
   <>
   <Store></Store>

{/* <LibraryCarousel></LibraryCarousel> */}

    {/* <GamePageStore  backgroundImage = {witcher3image} gameName="The Witcher 3: Wild Hunt" studioName="Cd Project Red"
     price="60$" Description="Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Project "
     releaseDate="5/6/2024" category="Action" steam="80$" epic="65$" gog="75$" cpu="Intel Core i5 7750k"
     gpu="Nvidia RTX 4090" ram="32" review="Good" userImage={profilePic} userReview="it is a very good game"
      image1={division} image2={witcher3image} image3={helldivers} trailer="https://youtu.be/QdBZY2fkU-0?si=wbDYYfqhNzGf8-ta" /> */}
    </>
  );
}

export default App;



