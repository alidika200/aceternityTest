import React from 'react';
import './profile.css';
import profilePic from './assets/debovxe-d9b6da12-ac0b-4e07-b12b-8021c24abfc7.jpg';
import SideNav from './dropDownNavBar';
import Header from './Layout';
import {
    HeartFilled,
    TrophyFilled
  } from '@ant-design/icons';
import { Margin } from '@mui/icons-material';

const Profile = () => {
    return (
        <>
       
        <div className='centeringTT'>
        <Header playerName ="Ali"backgroundImage = {profilePic}/> 
        <SideNav></SideNav>
            <div className="Profile-container">
                <div className='rowpro'>
                <div className="profilePage">
                    <div className="profile-pic-container">
                        <img src={profilePic} alt="Profile Picture" className="profile-pic" />
                        <h2>Mansour</h2>
                        <button className="edit-btn">Add</button>
                        <button className="edit-btn">chat</button>
                        <button className="edit-btn">block</button>
                    </div>
                    <div className="profile-content-container">
                        
                        <div className="games-friends">
                            <div className="games102" >
                                <h3 className="games101">Games</h3>
                                <p className="games101">69</p>
                            </div>
                            <div>
                                <h3>Friends</h3>
                                <p>12</p>
                            </div>
                        </div>
                        <div className="profileinfo">
                            <p>Lebanon</p>
                            <p>Player</p>
                            <p>Developer</p>
                            <div className="icons">
                                <span>🎥</span>
                                <span>🎮</span>  
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="stats">
                    <h3 className='h3stat'>Stats</h3>
                     <p><HeartFilled /> 1500</p>
                      <p style={{ marginRight: 30, marginTop:10, marginBottom:80 }}><TrophyFilled /> 9</p>
                </div>
                </div>
                <div className="profile-content">
                    <div className="most-played">
                        <h3>Last Played</h3>
                        <img src="path/to/witcher_image.jpg" alt="The Witcher 3 Wild Hunt" />
                    </div>
                    <div className="artwork">
                        <h3>Art Work</h3>
                        <img src="path/to/artwork_image.jpg" alt="When Society falls we rise" />
                    </div>
                </div>

                <div className="friends-communities">
                    <div className="friends">
                        <h3>Friends</h3>
                        <div className="friend-list">
                            <img src="path/to/friend1.jpg" alt="Friend 1" />
                            <img src="path/to/friend2.jpg" alt="Friend 2" />
                            <img src="path/to/friend3.jpg" alt="Friend 3" />
                        </div>
                    </div>
                    <div className="communities">
                        <h3>Communities</h3>
                        <div className="community-list">
                            <img src="path/to/community1.jpg" alt="Community 1" />
                            <img src="path/to/community2.jpg" alt="Community 2" />
                            <img src="path/to/community3.jpg" alt="Community 3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Profile;