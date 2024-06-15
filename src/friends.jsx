import React from 'react';
import './friends.css';
import profilePic from './assets/shitpost.jpg';
import Header from './Layout';
import SideNav from './dropDownNavBar';
import UserCard from './friendCard';

const Friends = () => {
  return (
    <>
    <div className='friendwrap11'>
       <Header playerName="Ali" backgroundImage={profilePic} /> 
       <SideNav></SideNav>
       <p className='card-cat3' >Your Games</p>
       <div className="card-row3">
            <UserCard userid="1" userImage={profilePic} userName="Ali" />                 
            <UserCard userid="2" userImage={profilePic} userName="Ali" />         
            <UserCard userid="3" userImage={profilePic} userName="Ali" />
            <UserCard userid="4" userImage={profilePic} userName="Ali" />    
            <UserCard userid="5" userImage={profilePic} userName="Ali" />
            <UserCard userid="1" userImage={profilePic} userName="Ali" />                 
            <UserCard userid="2" userImage={profilePic} userName="Ali" />         
            <UserCard userid="3" userImage={profilePic} userName="Ali" />
            <UserCard userid="4" userImage={profilePic} userName="Ali" />    
            <UserCard userid="5" userImage={profilePic} userName="Ali" />
            <UserCard userid="1" userImage={profilePic} userName="Ali" />                 
            <UserCard userid="2" userImage={profilePic} userName="Ali" />         
            <UserCard userid="3" userImage={profilePic} userName="Ali" />
            <UserCard userid="4" userImage={profilePic} userName="Ali" />    
            <UserCard userid="5" userImage={profilePic} userName="Ali" />
       </div> 
       </div>
    </>
  );
};

export default Friends;
