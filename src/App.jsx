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
import Friends from './friends';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import API from './apiTest';

function App() { 
  return (
    <BrowserRouter>
<Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route  path="/feed" element={<Feed/>}/>
  <Route  path="/store" element={<Store/>}/>
  <Route  path="/library" element={<LibraryCarousel/>}/>
  <Route path="/storePage" element={<GamePageStore />} />
  <Route  path="/libraryPage" element={<GamePageLibrary/>}/>
  <Route  path="/friends" element={<Friends/>}/>
  <Route  path="/addgame" element={<GameForm/>}/>
  <Route  path="/checkout" element={<GameForm/>}/>
  <Route  path="/signup" element={<SignUp/>}/>
  <Route  path="/login" element={<SignUp/>}/>
  <Route  path="/profile" element={<Profile/>}/>
  <Route  path="/APII" element={<API/>}/>
 </Routes>
 </BrowserRouter>
  );
}
export default App;



