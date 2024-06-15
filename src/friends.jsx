import React from 'react';
import './friends.css';
import profilePic from './assets/shitpost.jpg';
import Header from './Layout';
import SideNav from './dropDownNavBar';
import UserCard from './friendCard';

const Friends = () => {
  return (
    <>
       <Header playerName="Ali" backgroundImage={profilePic} /> 
       <SideNav></SideNav>
      <div className='friendwrap11'>
            <UserCard userid="1" userImage={profilePic} userName="Ali" />                 
            <UserCard userid="2" userImage={profilePic} userName="Ali" />         
            <UserCard userid="3" userImage={profilePic} userName="Ali" />
            <UserCard userid="4" userImage={profilePic} userName="Ali" />    
            <UserCard userid="5" userImage={profilePic} userName="Ali" />
       </div> 
    </>
  );
};

export default Friends;
