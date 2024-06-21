import React from 'react';
import './community.css';
import profilePic from './assets/shitpost.jpg';
import pro1 from './assets/unnamed.webp';
import Header from './Layout';
import division from './assets/division.jpg';
import logo from './assets/witcherlogo.jpg';
import SideNav from './dropDownNavBar';
import Post from './postComponent';
import { Link } from 'react-router-dom';
import witcher3image from './assets/witcher3.jpg';
import witcher3image1 from './assets/witcher3image1.jpg';
import witcher3image2 from './assets/witcher3image2.jpg';
import witcher3image3 from './assets/witcher3image3.jpg';
import logo25 from './assets/witcherlogo.jpg';

const Community = () => {
  const gameData = {
    gameName: "The Witcher 3: Wild Hunt",
    studioName: "CD Projekt Red",
    categories: ['Adventure', 'RPG'],
    backgroundImage: logo25,
    price: "60$",
    Description: "Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projekt.",
    releaseDate: "5/6/2024",
    category: "Action",
    cpu: "Intel Core i5 7750k",
    gpu: "Nvidia RTX 4090",
    ram: "32",
    review: "Good",
    userImage: profilePic,
    userReview: "lmao so gay",
    image1: witcher3image1,
    image2: witcher3image2,
    image3: witcher3image3,
    trailer: "https://youtu.be/c0i88t0Kacs?si=wVnS0T0LXI2slZIi"
  };

  return (
    <>
      <Header playerName="Ali" backgroundImage={profilePic} />
      <SideNav />
      <div className="communityLayout">
        <div className="feed2">
          <Post userImage={pro1} userName="Ali" mediaUrl={witcher3image2} postText="Wow this game is rad" />
          <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" />
          <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" />
          <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" />
          <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" />
          <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" />
        </div>
        <div className="rightNav">
          <img src={gameData.backgroundImage} alt="Community" className="communityImg" />
          <p className="communityName">{gameData.gameName}</p>
          <p>Filter</p>
          <div className="filterCard">
            <ul>
              <li>Posts</li>
              <li>Media</li>
              <li>Reviews</li>
            </ul>
          </div>
          <p>Community</p>
          <div className="communityCard">
            <ul>
              <li>Tournaments</li>
              <Link to="/storePage" state={gameData}>
                <li>Store Page</li>
              </Link>
              <li>News</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
