import React from "react";
import './home.css';
import wallpap from './assets/bashar.jpeg';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="outsidehome">
            <div className='homehome' style={{ backgroundImage: `url(${wallpap})` }}>
                <div className="phraseHome">we didn't implement the landing page yet so this is a home</div>
                <Link to='/store'>
                <button className="button">Get Started</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
