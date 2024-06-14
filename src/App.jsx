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
import Feed from './feed';
import SignUp from './SignUpPage';
import Home from './home';
import Profile from './profile';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import API from './apiTest';





function App() {

  const gamePageStoreData = {
    gameName: "The Witcher 3 Wild Hunt",
    studioName: "CD Projekt Red",
    backgroundImage: witcher3image,
    price: "60$",
    Description: "Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projekt",
    releaseDate: "5/6/2024",
    category: "Action",
    steam: "80$",
    epic: "65$",
    gog: "75$",
    cpu: "Intel Core i5 7750k",
    gpu: "Nvidia RTX 4090",
    ram: "32",
    review: "Good",
    userImage: profilePic,
    userReview: "It is a very good game",
    image1: division,
    image2: witcher3image,
    image3: helldivers,
    trailer: "https://youtu.be/QdBZY2fkU-0?si=wbDYYfqhNzGf8-ta"
  };
  return (

    
    <BrowserRouter>
<Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route  path="/feed" element={<Feed/>}/>
  <Route  path="/store" element={<Store/>}/>
  <Route  path="/library" element={<LibraryCarousel/>}/>
  <Route path="/storePage" element={<GamePageStore {...gamePageStoreData} />} />
  <Route  path="/libraryPage" element={<GamePageLibrary/>}/>
  <Route  path="/addgame" element={<GameForm/>}/>
  <Route  path="/checkout" element={<GameForm/>}/>
  <Route  path="/signup" element={<SignUp/>}/>
  <Route  path="/login" element={<SignUp/>}/>
  <Route  path="/profile" element={<Profile/>}/>
  <Route  path="/APII" element={<API/>}/>
 </Routes>
 </BrowserRouter>
  );

  // curl --location 'https://www.cheapshark.com/api/1.0/games?id=612'
}
export default App;



