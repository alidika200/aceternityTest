import React from 'react';
import profilePic from './assets/shitpost.jpg'
import Header from './Layout';
import Card from './card';
import Store from './store';
import GamePageLibrary from './gamePageLibrary';
import witcher3image from './assets/witcher3.jpg';
import division from './assets/download.jpg'
import helldivers from './assets/helldivers.jpg';
import tournamentimage from './assets/logo1.png' ;
import GameForm from './addGameForn';
import CarouselComponent from './CarouselComponent';
import { HdRounded } from '@mui/icons-material';

function App() {
  return (
    <>
{/* <Store></Store> */}

    


{/* <GameForm></GameForm>  */}


        <GamePageLibrary backgroundImage = {witcher3image} gameName="The Witcher 3: Wild Hunt" studioName="Cd Project Red"
       Description="Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projst "
       datePlayed="5/6/2024" totalHours="132 hours" numberOfTournaments="18" tournamentImage={tournamentimage} tournamentDesc="awijdioawjdowajdiowajdiowaiod"/> 


  
   </>
 );
}

export default App;



