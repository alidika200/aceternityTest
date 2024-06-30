import React, { useState } from 'react';
import './feed.css';
import profilePic from './assets/shitpost.jpg';
import Header from './Layout';
import division from './assets/division.jpg';
import SideNav from './dropDownNavBar';
import Post from './postComponent';
import UpperNavBar from './upperNavbar';
import PostPopup from './postpopup';

const SavedFeed = () => {
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
      {/* <UpperNavBar onPostTypeSelected={handlePostTypeSelected} /> */}
      <div className="feed">
        <Header playerName="Ali" backgroundImage={profilePic} />
        <SideNav />

        <h1  style={{ color: 'white' }}>Saved posts</h1>
        <div className='posts'>
          <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" />
          <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" />
          <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" />
          <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" />
          <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" />
          <Post userImage={profilePic} userName="Ali" mediaUrl={division} postText="Wow this game is rad" />
        </div>
      </div>
      {/* {popupType && <PostPopup type={popupType} onClose={handlePopupClose} onSubmit={handlePostSubmit} />} */}
    </>
  );
};

export default SavedFeed;
