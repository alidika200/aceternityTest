import React, { useState } from 'react';
import './feed.css';
import profilePic from './assets/shitpost.jpg';
import Header from './Layout';
import division from './assets/division.jpg';
import SideNav from './dropDownNavBar';
import Post from './postComponent';
import UpperNavBar from './upperNavbar';
import PostPopup from './postpopup';

const Feed = () => {
  // const [popupType, setPopupType] = useState(null);

  // const handlePostTypeSelected = (type) => {
  //   setPopupType(type);
  // };

  // const handlePopupClose = () => {
  //   setPopupType(null);
  // };

  // const handlePostSubmit = (postData) => {
  //   console.log('Post submitted:', postData);
  // };

  return (
    <>
      <Header playerName="Ali" backgroundImage={profilePic} />
      <SideNav />
      {/* <UpperNavBar onPostTypeSelected={handlePostTypeSelected} /> */}
      <div className="feed">
        <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" />
        <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" />
        <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" />
        <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" />
        <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" />
        <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" />
      </div>
      {/* {popupType && <PostPopup type={popupType} onClose={handlePopupClose} onSubmit={handlePostSubmit} />} */}
    </>
  );
};

export default Feed;
