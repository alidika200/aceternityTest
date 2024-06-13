import React from 'react';
import './feed.css';
import profilePic from './assets/shitpost.jpg';
import Header from './Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import division from './assets/division.jpg'
import ReactPlayer from 'react-player';
import SideNav from './dropDownNavBar';
import Post from './postComponent';

const Feed = () => {
  


  return (
    <>
      <Header playerName="Ali" backgroundImage={profilePic} />
      <SideNav></SideNav>
      <div className='feed'>
        <div className='createPostBar'></div>
        <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" ></Post>
        <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" ></Post>
        <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" ></Post>
        <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" ></Post>
        <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" ></Post>
        <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" ></Post>
       
       
        <div></div>
      </div>


    </>
  );
};

export default Feed;
