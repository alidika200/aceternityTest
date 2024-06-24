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
import { HdRounded, ImportExport } from '@mui/icons-material';
import SideNav from './dropDownNavBar';
import LibraryCarousel from './libraryCarousel';
import Feed from './feed';
import Login2 from './loginPage';
import Home from './home';
import Profile from './profile';
import Friends from './friends';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import API from './apiTest';
import LibraryGrid from './LibraryGrids';
import SignUp2 from './singUp';
import Community from './community';
import Bracket from './Bracket';
import Tournament from './tournamentList';
import LandingPage from './LandinPage';
import MyComponent from './components/ui/tester';
function App() { 
  return (
    <BrowserRouter>
<Routes>
  <Route exact path="/" element={<LandingPage/>}/>
  <Route exact path="/Home" element={<LandingPage/>}/>
  <Route  path="/feed" element={<Feed/>}/>
  <Route  path="/store" element={<Store/>}/>
  <Route  path="/tournament" element={<Tournament/>}/>
  <Route  path="/library" element={<LibraryCarousel/>}/>
  <Route  path="/library2" element={<LibraryGrid/>}/>
  <Route  path="/storePage" element={<GamePageStore />} />
  <Route  path="/libraryPage" element={<GamePageLibrary/>}/>
  <Route  path="/friends" element={<Friends/>}/>
  <Route  path="/addgame" element={<GameForm/>}/>
  <Route  path="/community" element={<Community/>}/>
  <Route  path="/signup" element={<SignUp2/>}/>
  <Route  path="/login" element={<Login2/>}/>
  <Route  path="/profile" element={<Profile/>}/>
  <Route  path="/APII" element={<API/>}/>
  <Route  path="/br" element={<Bracket/>}/>
 </Routes>
 </BrowserRouter>
  );
}
export default App;



